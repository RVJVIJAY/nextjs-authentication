// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // const JWT_SECRET = process.env.JWT_SECRET || 'vijay123';
  console.log("Middleware triggered"); 
  const token = req.cookies.get('token')?.value; // Extract the token
  console.log("Token in middleware:", token); 

  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL('/user/login', req.url));
  }

  // Proceed without JWT verification here
  return NextResponse.next(); 
}

export const config = {
  matcher: ['/user/profile'], // Matches all routes under /user ,/user/:path*
  //access only particular ['/user/profile']
};
