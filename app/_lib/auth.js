import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { createUser, getUser } from "./data-service";
import { getServerSession } from "next-auth/next";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // Handle user authorization
    async authorized({ auth, request }) {
      // Ensure the user is authenticated
      return !!auth?.user;
    },

    // Handle sign-in process
    async signIn({ user }) {
      try {
        const existingUser = await getUser(user.email);

        if (!existingUser) {
          // Create a new user if not found
          await createUser({
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }

        // Always return true to allow sign-in
        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        // Return false to deny sign-in if there's an error
        return false;
      }
    },
  },
  pages: {
    signIn: "/login", // Custom sign-in page
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
