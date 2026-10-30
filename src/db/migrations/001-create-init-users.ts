import { db } from '../db'

// Create the users table and insert initial entries
export const createInitUsers = async () => {
	await db.query(`
		CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			name TEXT NOT NULL
		)
	`)

	await db.query(`INSERT INTO users (name) VALUES ($1), ($2), ($3)`, ['Alice', 'Bob', 'Charlie'])

	console.log('users table created and values inserted')
}
