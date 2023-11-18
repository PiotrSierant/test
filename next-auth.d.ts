import type { DefaultSession } from 'next-auth';
import { JWT } from "next-auth/jwt";
import { Types } from 'mongoose';

declare module 'next-auth' {
    interface Session {
        user: DefaultSession['user'] & {
            // _id?: Types.ObjectId;
            id: string;
            surname?: string;
            roles: any;
            bio?: string;
            phone?: string;
        };
    }

    interface User {
        // _id?: Types.ObjectId;
        id: string;
        surname?: string;
        roles: string[];
        bio?: string;
        phone?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: DefaultSession['user'] & {
            // _id?: Types.ObjectId;
            id: string;
            roles: string[];
            [key: string]: any;
        };
    }
}
