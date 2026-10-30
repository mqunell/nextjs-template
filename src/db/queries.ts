import type { User } from '@/types/user'
import { db } from './db'

export const getUsers = async (): Promise<User[]> => {
	const res = await db.query<User>(`SELECT * FROM users ORDER BY name ASC`)
	return res.rows
}
