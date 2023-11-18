import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            if (/\/panel\/.*$/.test(req.nextUrl.pathname)) {
                return token?.user.roles.includes("admin");
            }
            return !!token
        },
    },
})

export const config = { matcher: ["/panel", "/panel/:path*"] }