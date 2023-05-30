import SsrPage from './ssr';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

// todo: how do I specify SSR?
const Page = async () => {
	await dbConnect();

	const result = await User.find({});
	const users = result.map((doc) => {
		const user = doc.toObject();
		user._id = user._id.toString();
		return user;
	});

	return <SsrPage users={users} />;
};

export default Page;
