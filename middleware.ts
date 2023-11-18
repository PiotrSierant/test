import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            if (/\/panel\/.*$/.test(req.nextUrl.pathname)) {
                return token?.roles && Array.isArray(token.roles) ? token.roles.includes("admin") : false;
            }
            return !!token
        },
    },
})

export const config = { matcher: ["/panel", "/panel/:path*"] }