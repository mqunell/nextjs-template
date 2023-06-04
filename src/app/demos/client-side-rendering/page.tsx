import { Metadata } from 'next';
import ClientSideRendering from './ClientSideRendering';

export const metadata: Metadata = {
	title: 'CSR Demo',
	description: 'CSR Demo',
	icons: {
		icon: '/favicon.ico',
	},
};

const Page = async () => <ClientSideRendering />;

export default Page;
