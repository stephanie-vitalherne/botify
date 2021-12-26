import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  /* allow request if following is true
   - if request exists already
   - if the token exists */
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // redirect to login page if token not found and requesting protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
