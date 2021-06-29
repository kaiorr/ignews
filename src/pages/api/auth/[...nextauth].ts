import { query as q } from 'faunadb';
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { fauna } from  '../../../Services/fauna'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read,user",
    }),
  ],
    callbacks: {
      async signIn(user, account, profile) {
        const { email } = user;
        try {
          await fauna.query(
            q.Create(
              q.Collection('users'),
              { data : {  email } }
            )
          )
          return true
        } catch (error) {
          throw new Error("Email is not valid " + error);
        }
      },
    }
});
