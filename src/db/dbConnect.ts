import { Pool } from 'pg'

const { POSTGRES_USER, POSTGRES_PASS, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB } = process.env

if (!POSTGRES_USER || !POSTGRES_PASS || !POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_DB) {
	throw new Error('Postgres config missing in .env')
}

export const pool = new Pool({
	user: POSTGRES_USER,
	password: POSTGRES_PASS,
	host: POSTGRES_HOST,
	port: Number(POSTGRES_PORT),
	database: POSTGRES_DB,
})
