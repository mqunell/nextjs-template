'use client';

import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import axios from 'axios';

// todo: does metadata need to use next/head for client components?
/* export const metadata: Metadata = {
	title: 'CSR Demo',
	description: 'CSR Demo',
	icons: {
		icon: '/favicon.ico',
	},
}; */

const ClientSideRendering = () => {
	const [fetchText, setFetchText] = useState('Loading...');

	useEffect(() => {
		axios
			.get('/api/hello')
			.then((res) => setFetchText(res.data.text))
			.catch((error) => setFetchText(`Failed to load: ${JSON.stringify(error)}`));
	}, []);

	return (
		<div className="p-8">
			<h1 className="text-lg underline">Client-side Rendering</h1>
			<p>Use Axios, useEffect, and useState to retrieve data from `api/hello`:</p>
			<p>{fetchText}</p>
		</div>
	);
};

export default ClientSideRendering;
