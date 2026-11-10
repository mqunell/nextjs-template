import { getUsers } from '@/db/queries'

export const dynamic = 'force-dynamic'

const Home = async () => {
	let demoText: string

	try {
		const users = await getUsers()
		demoText = users.map((user) => user.name).join(', ')
	} catch (err) {
		demoText = 'Database error. Check POSTGRES_URL and run the migration.'
		console.error(err)
	}

	return (
		<div className="flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-linear-120 from-slate-700 to-slate-900 text-slate-200">
			<h1 className="text-xl">
				See{' '}
				<code className="rounded-md bg-gray-800 px-2 py-1 text-lg text-slate-300">README.md</code>{' '}
				for steps on setting up this template
			</h1>

			<p>Demo users: {demoText}</p>
		</div>
	)
}

export default Home
