import { Pool } from 'pg'

const { POSTGRES_URL } = process.env

if (!POSTGRES_URL) {
	throw new Error('POSTGRES_URL not set in .env')
}

export const db: Pool = new Pool({ connectionString: POSTGRES_URL })
