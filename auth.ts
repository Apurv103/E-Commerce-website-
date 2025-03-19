import NextAuth from 'next-auth';
import {PrismaAdapter} from '@auth/prisma-adapter';
import {prisma} from '@/db/prisma';
// import { adapter } from 'next/dist/server/web/adapter';
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from 'bcrypt-ts-edge';
import type { NextAuthConfig } from 'next-auth';

export const config = {
    pages:{
        signIn : '/sign-in',
        error: '/sign-in',

    },
    session : {
        strategy : "jwt",
        maxAge : 30 * 34 * 60 * 60, // 30days in total

    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: "email"},
                password: { type: "password" }
              },
              async authorize(credentials){
                if (credentials == null) return null;

                //Find in a database
                const user = await prisma.user.findFirst({
                    where:{
                        email: credentials.email as string
                    }
                });

                //check is user exists and if the password matches
                if (user && user.password ){
                    const isMatch = compareSync (credentials.password as string, user.password)

                    // If password is correct then we want to return the user

                    if (isMatch){
                        return{
                            id :user.id,
                        name : user.name,
                        email : user.email,
                        role:user.role
                        }
                        

                    }
                }
                // If user doesnot exist or the password doesnot match then rutuen null
                return null;
              }
        })
    ],
    callbacks:{
        async session({ session, user, trigger, token }: any) { // any- type
            // Set the user ID from the token
            session.user.id = token.sub;

            // If there is an update, set the user name

            if (trigger === 'update'){
                session.user.name = user.name;
            }
            return session
          },
    }

} satisfies NextAuthConfig; // compatible 

export const { handlers, auth, signIn, signOut }=NextAuth(config); 