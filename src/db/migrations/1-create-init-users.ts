import { pool } from '../dbConnect'

// Create the users table and insert initial entries
export const createInitUsers = async () => {
	await pool.query(`DROP TABLE IF EXISTS users`)
	await pool.query(`
		CREATE TABLE users (
			id SERIAL PRIMARY KEY,
			name TEXT NOT NULL
		)
	`)

	await pool.query(`INSERT INTO users (name) VALUES ($1), ($2), ($3)`, ['Alice', 'Bob', 'Charlie'])

	console.log('users table created and values inserted')
}
