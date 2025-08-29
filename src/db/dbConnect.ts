import { Pool } from 'pg'

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASS } = process.env

if (!POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_DB || !POSTGRES_USER || !POSTGRES_PASS) {
	throw new Error('Postgres config missing in .env')
}

export const pool = new Pool({
	host: POSTGRES_HOST,
	database: POSTGRES_DB,
	user: POSTGRES_USER,
	password: POSTGRES_PASS,
	ssl: {}, // Neon only
})
