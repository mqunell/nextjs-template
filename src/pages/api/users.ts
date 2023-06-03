import { getUsers } from '@/lib/users';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * All HTTP request methods (ie. GET, POST) go to this function. Use req.method
 * to see which was used and, if necessary, perform request-specific tasks.
 *
 * req is http.IncomingMessage plus some pre-built middlewares
 * res is http.ServerResponse plus some helper functions
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const users = await getUsers();
	res.status(200).json(users);
};

export default handler;
