import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export function middleware(req) {
	const token = getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	const { pathname } = req.nextUrl;

	if (pathname.includes('/api/auth') || token) {
		return NextResponse.next();
	}

	if (!token && pathname !== '/login') {
		return NextResponse.redirect('/login');
	}
}
