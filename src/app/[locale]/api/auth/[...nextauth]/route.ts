// imports
import NextAuth from "next-auth";

// importing providers
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          credentials?.username.toLowerCase() !== "kamal" ||
          credentials?.password !== "kamal@123"
        ) {
          throw new Error("No user Found with Email");
        }
        const user = { id: "1", name: "Kamal", email: "kamal@salla.sa" };

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1; // 1 day
      }
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
  secret: "sekret",
  jwt: {
    secret: "sekret",
  },
});

export { handler as GET, handler as POST };
