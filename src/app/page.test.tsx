vi.mock('@/db/queries', () => ({
	getUsers: vi.fn(),
}))

import { render, screen } from '@testing-library/react'
import { getUsers } from '@/db/queries' // Imports from the mock, not the real file
import Home from './page'

describe('Home', () => {
	it('renders demo users', async () => {
		vi.mocked(getUsers).mockResolvedValue([
			{ id: 1, name: 'Alice' },
			{ id: 2, name: 'Bob' },
			{ id: 3, name: 'Charlie' },
		])

		render(await Home())

		expect(screen.getByRole('heading', { name: /README\.md/i })).toBeInTheDocument()
		expect(screen.getByRole('code')).toHaveTextContent(/README\.md/)
		expect(screen.getByText('Demo users: Alice, Bob, Charlie')).toBeInTheDocument()
	})
})
