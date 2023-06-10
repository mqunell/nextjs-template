import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
	const body = await req.json();
	const { name } = body;

	return NextResponse.json(name);
};
