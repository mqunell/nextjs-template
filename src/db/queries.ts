import { pool } from './dbConnect'

export const getUsers = async (): Promise<User[]> => {
	const res = await pool.query<User>(`SELECT * FROM users ORDER BY name ASC`)
	return res.rows
}
