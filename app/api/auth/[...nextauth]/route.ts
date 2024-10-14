import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';

// Налаштування NextAuth
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'you@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (user && user.password === credentials?.password) {
          return user;
        } else {
          throw new Error('Invalid email or password');
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account && account.provider === 'google') {
        if (profile && profile.email && profile.name && profile.sub) {
          const { email, name, image, sub } = profile;
          await prisma.user.upsert({
            where: { email },
            update: { name, image },
            create: {
              email,
              name,
              image,
              sub,
              favorite: { create: {} },
              drawer: { create: {} },
            },
          });

          return true;
        }
      }
      if (account && account.provider === 'credentials') {
        return true;
      }
      return false;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
