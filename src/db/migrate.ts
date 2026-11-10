import fs from 'node:fs'
import path from 'node:path'
import { db } from './db'

const MIGRATIONS_DIR = path.join(process.cwd(), 'src/db/migrations')

type MigrationRecord = {
	filename: string
	applied_at: Date
}

const migrate = async () => {
	const client = await db.connect()

	try {
		await client.query(`
			CREATE TABLE IF NOT EXISTS migrations (
				filename TEXT PRIMARY KEY,
				applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
			)
		`)

		const { rows } = await client.query<Pick<MigrationRecord, 'filename'>>(
			`SELECT filename FROM migrations`,
		)
		const appliedFilenames = new Set(rows.map((r) => r.filename))

		const localFilenames = fs
			.readdirSync(MIGRATIONS_DIR)
			.filter((filename) => filename.endsWith('.sql')) // Filter out stray hidden files
			.sort()

		let anyApplied = false

		for (const filename of localFilenames) {
			if (appliedFilenames.has(filename)) {
				continue
			}

			const sql = fs.readFileSync(path.join(MIGRATIONS_DIR, filename), 'utf8')

			try {
				await client.query('BEGIN')
				await client.query(sql)
				await client.query('INSERT INTO migrations (filename) VALUES ($1)', [filename])
				await client.query('COMMIT')

				anyApplied = true
				console.log(`✅ ${filename} applied`)
			} catch (err: unknown) {
				await client.query('ROLLBACK')
				const message = err instanceof Error ? err.message : String(err)
				throw new Error(`❌ ${filename} failed: ${message}`)
			}
		}

		if (!anyApplied) {
			console.log('⏩ No new migrations to apply')
		}
	} finally {
		client.release()
	}
}

migrate().finally(() => db.end())
