import { getUsers } from '@/db/queries'

const Home = async () => {
	const users = await getUsers()
	const names = users.map((user) => user.name).join(', ')

	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-linear-120 from-slate-700 to-slate-900 text-slate-200">
			<h1 className="text-xl">
				See{' '}
				<code className="rounded-md bg-gray-800 px-2 py-1 text-lg text-slate-300">README.md</code>{' '}
				for steps on setting up this template
			</h1>

			<p>Demo users: {names}</p>
		</div>
	)
}

export default Home
