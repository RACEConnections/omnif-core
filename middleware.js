// middleware.js (Vercel Root)
import { NextResponse } from 'next/server';

export function middleware(request) {
    // Target any URL that includes '/vault/'
    if (request.nextUrl.pathname.startsWith('/vault/')) {
        
        // Check if the user has the secure Vanguard cookie
        const hasAuth = request.cookies.has('chairman_auth_token');
        
        if (!hasAuth) {
            // Kick them back to the main domain
            return NextResponse.redirect(new URL('https://vci.protocolx.one', request.url));
        }
    }
    return NextResponse.next();
}
