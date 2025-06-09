import { Metadata } from 'next'
import { getUsers } from '@/db/queries'
import { basicMetadata } from '@/lib/basicMetadata'

export const metadata: Metadata = basicMetadata('SSR Demo')

// Revalidate the page on every request. Pages are automatically server-side rendered in Next 13
export const revalidate = 0

const Page = async () => {
	const users = await getUsers()

	return (
		<>
			<h1 className="text-lg underline">Server-side Rendering</h1>
			<ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
		</>
	)
}

export default Page
