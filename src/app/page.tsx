import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Next.js Template',
	description: 'My customized Next.js template to quickly start future projects',
	icons: {
		icon: '/favicon.ico',
	},
};

const links = [
	{ text: 'Static Generation', url: '/demos/static-generation' },
	{ text: 'Server-side Rendering', url: '/demos/server-side-rendering' },
	{ text: 'Client-side Rendering', url: '/demos/client-side-rendering' },
];

const Home = () => (
	<div className="flex flex-col gap-2 p-8">
		{links.map(({ text, url }) => (
			<Link key={url} href={url} className="text-blue-500 hover:underline">
				{text}
			</Link>
		))}
	</div>
);

export default Home;
