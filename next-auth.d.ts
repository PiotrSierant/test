import type { DefaultSession } from 'next-auth';
import { JWT } from "next-auth/jwt";

declare module 'next-auth' {
    interface Session {
        user: DefaultSession['user'] & {
            roles: string[];
            surname?: string;
            bio?: string;
            phone?: string;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: DefaultSession['user'] & {
            [key: string]: any;
        };
    }
}
