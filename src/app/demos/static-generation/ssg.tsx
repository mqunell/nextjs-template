'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'SSG Demo',
	description: 'SSG Demo',
	icons: {
		icon: '/favicon.ico',
	},
};

const StaticGeneration = ({ users }: { users: User[] }) => (
	<div className="p-8">
		<h1 className="text-lg underline">Static Generation</h1>
		<ul>{users && users.map((user) => <li key={user._id}>{user.name}</li>)}</ul>
	</div>
);

export default StaticGeneration;
