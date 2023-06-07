import { Metadata } from 'next';
import ClientSideRendering from './ClientSideRendering';
import { basicMetadata } from '@/lib/basicMetadata';

export const metadata: Metadata = basicMetadata('CSR Demo');

const Page = async () => <ClientSideRendering />;

export default Page;
