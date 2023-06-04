import { cache } from 'react';
import { Metadata } from 'next';
import { getUsers } from '@/lib/users';

export const metadata: Metadata = {
	title: 'SSG Demo',
	description: 'SSG Demo',
	icons: {
		icon: '/favicon.ico',
	},
};

// Revalidate the page every 60 seconds for ISR
export const revalidate = 60;

// The cache function is used for SSG when not using fetch
const cacheGetUsers = cache(getUsers);

const Page = async () => {
	const users = await cacheGetUsers();

	return (
		<>
			<h1 className="text-lg underline">Static Generation</h1>
			<ul>{users && users.map((user) => <li key={user._id}>{user.name}</li>)}</ul>
		</>
	);
};

export default Page;
