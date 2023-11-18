import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '../../../models/user';
import connectDBMongoose from '../../../lib/dbConnect';
import clientPromise from '../../../lib/mongodb-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

import { compare } from 'bcryptjs';
import { decryptDataLogin } from '../../../src/helpers/cryptoFunctions';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          roles: ['user'],
        }
      }
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
          await connectDBMongoose();

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

          return user
        } catch (error) {
          console.error("Błąd podczas autoryzacji:", error);
          throw error;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.roles = user.roles || ["user"]
      }
      return token
    },
    async session({ session, token }) {
      session.user.roles = token.roles || ["user"];
      session.user.id = token.sub || "";
      return session
    }
  },
  pages: {
    signIn: '/account/login'
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt'
  }
}

export default NextAuth(authOptions)