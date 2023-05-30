'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'SSR Demo',
	description: 'SSR Demo',
	icons: {
		icon: '/favicon.ico',
	},
};

const ServerSideRendering = ({ users }: { users: User[] }) => (
	<div className="p-8">
		<h1 className="text-lg underline">Server-side Rendering</h1>
		<ul>{users && users.map((user) => <li key={user._id}>{user.name}</li>)}</ul>
	</div>
);

export default ServerSideRendering;
