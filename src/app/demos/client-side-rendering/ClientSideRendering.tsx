'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const ClientSideRendering = () => {
	const [usernames, setUsernames] = useState<String>('Loading...');

	useEffect(() => {
		axios
			.get('/api/users')
			.then((res) => {
				const names = res.data.map((user: User) => user.name);
				setUsernames(names.join(', '));
			})
			.catch((error) => setUsernames(`Failed to load: ${JSON.stringify(error)}`));
	}, []);

	return (
		<>
			<h1 className="text-lg underline">Client-side Rendering</h1>
			<p>Use Axios, useEffect, and useState to retrieve data from `/api/users`:</p>
			<p>{usernames}</p>
		</>
	);
};

export default ClientSideRendering;
