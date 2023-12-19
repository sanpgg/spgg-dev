import { NextResponse, NextRequest } from 'next/server'
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const user_token = req.cookies.get('user_token');
  
  if (!user_token) {
    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    url.pathname = `/`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = {
  matcher: '/main',
}