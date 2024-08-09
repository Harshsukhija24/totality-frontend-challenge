// src/pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDb } from "../../../utils/connectdb";
import Buyer from "../../../model/buyer";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jdoe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDb();

        // Find the buyer by email
        const user = await Buyer.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("User not found");
        }

        // Check password
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordMatch) {
          throw new Error("Invalid password");
        }

        return {
          userId: user._id.toString(),
          firstName: user.firstName || null,
          lastName: user.lastName || null,
          email: user.email,
          userType: "buyer", // Set userType to "buyer" explicitly
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.userId;
        token.firstName = user.firstName || null;
        token.lastName = user.lastName || null;
        token.email = user.email;
        token.userType = user.userType; // Always set to "buyer"
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          userId: token.userId,
          firstName: token.firstName || null,
          lastName: token.lastName || null,
          email: token.email,
          userType: token.userType, // Always "buyer"
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/Login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
