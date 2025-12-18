import { type NextRequest, NextResponse } from 'next/server'
import { getUsers } from '@/db/queries'

export const GET = async (_request: NextRequest): Promise<NextResponse> => {
	const users: User[] = await getUsers()
	return NextResponse.json({ users })
}
