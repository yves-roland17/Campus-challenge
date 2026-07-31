import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {prisma} from "@/lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import { loginSchema } from "./lib/validation"
import bcrypt from "bcryptjs"
import { Role } from "./app/generated/prisma"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

const Github_id= process.env.GITHUB_ID
const Github_secret=process.env.GITHUB_SECRET

const Google_id= process.env.GOOGLE_ID
const Google_secret=process.env.GOOGLE_SECRET



export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma as any),
   session: { strategy: "jwt" },
  callbacks: {
      async jwt({ token, user }) {
      if (user) {
        token.id = user.id?.toString()
        token.name = user.name
        token.email= user.email
        token.picture=user.image
        token.role = (user as any).role 
      }
      return token
    },
    async  session({ session, token }) {
      if (session.user && token.role) {
        session.user.id = token.id as string
        session.user.role = token.role as "ADMIN" | "USER"
        session.user.name = token.name as string
        session.user.email = token.email as string
        session.user.image=token.picture as string
      }
      return session
    }
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
 authorize: async (credentials) => {
  try {
    const { email, password } = await loginSchema.parseAsync(credentials);
    const user = await prisma.user.findUnique({
      where: { email }
    });
    if (!user) {
      return null;
    }
    if(user.password===null){
      return null
    }
     const isPasswordValide = await bcrypt.compare(password, user.password);
    if (!isPasswordValide){
       return null;
    }
    return {
      
          id: user.id.toString(), 
          name: user.name,
          email: user.email,
          role: user.role as Role,
          
    };
    
  } catch (error) {
    if (error instanceof Error) {
      error.message = "❌ Erreur lors de la connexion : " + error.message;
      console.error("❌ Erreur inconnue lors de la connexion :", error);
    }
    return null; 
  }
}

}),


GoogleProvider({
clientId:Google_id,
clientSecret:Google_secret
}),
GithubProvider({
  clientId: Github_id,
  clientSecret:Github_secret
}),


  ],
})