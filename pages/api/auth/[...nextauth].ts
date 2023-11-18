import { compare } from 'bcryptjs';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { connectToMongoDB, disconnectFromMongoDB } from '../../../lib/mongodb';
import { decryptDataLogin } from '../../../src/helpers/cryptoFunctions';
import { Types } from 'mongoose';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import User from '../../../models/user';
export interface IUser {
    _id?: Types.ObjectId;
    email: string;
    roles: string[];
    name: string;
    surname: string;
    image: string;
    bio: string;
    phone: string;
}
export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                cryptedEmail: { label: "Email", type: "text" },
                cryptedPassword: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (credentials === undefined || credentials.cryptedEmail === undefined || credentials.cryptedPassword === undefined) {
                    throw new Error('Invalid credentials!');
                }

                const decryptedEmail = decryptDataLogin(credentials.cryptedEmail);
                const decryptedPassword = decryptDataLogin(credentials.cryptedPassword);

                try {
                    await connectToMongoDB();

                    const user = await User.findOne({
                        email: decryptedEmail
                    }).select("+password");

                    if (!user) {
                        throw new Error("Invalid user");
                    }

                    const isPasswordCorrect = await compare(decryptedPassword, user.password);

                    if (!isPasswordCorrect) {
                        throw new Error("Invalid password");
                    }

                    return user;
                } catch (error) {
                    console.error("Błąd podczas autoryzacji:", error);
                    throw error;
                } finally {
                    await disconnectFromMongoDB();
                }
            }
        })
    ],
    pages: {
        signIn: "/account/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ account, profile, user }) {
            try {
                await connectToMongoDB().catch(err => { throw new Error(err) });
                let userExist = await User.findOne({ email: profile?.email?.toLowerCase() });
                if (account?.provider === "google" && !userExist) {
                    const newUser = new User({
                        email: profile?.email?.toLowerCase(),
                        name: profile?.name,
                        image: user?.image,
                        roles: ["user"],
                    });
                    await newUser.save();
                } else if (account?.provider === "facebook" && !userExist) {
                    const newUser = new User({
                        email: user?.email?.toLowerCase(),
                        name: user?.name,
                        image: user?.image,
                        roles: ["user"],
                    });
                    await newUser.save();
                }
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
            finally {
                await disconnectFromMongoDB();
            }
        },
        jwt: async ({ token, user }) => {
            await connectToMongoDB().catch(err => { throw new Error(err) });
            let userExist = await User.findOne({ email: token?.email?.toLowerCase() });
            if (!userExist) {
                const newUser = new User({
                    email: token?.email?.toLowerCase(),
                    name: token?.name,
                    image: token?.picture,
                    roles: ["user"],
                });
                await newUser.save();
                let newUserFromBase = await User.findOne({ email: token?.email?.toLowerCase() });
                token.user = newUserFromBase;
            } else {
                token.user = userExist;
            }
            await disconnectFromMongoDB();
            return token
        },
        session: async ({ session, token }) => {
            const user = token.user as IUser
            session.user = user
            return session
        },
    }
}

export default NextAuth(options)