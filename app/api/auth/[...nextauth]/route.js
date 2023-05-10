import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { connectDb } from '@utils/database'
import User from '@models/User'

console.log({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // callbacks: {
  //   async session({ session, token, user }) {
  //       const sessionUser = await  User.findOne({email: session.user.email})
        
  //       session.user.id = sessionUser._id.toString();
  //       return session;

  //   },
  //   async signIn({ account, profile, user, credentials }) {
  //        try{
  //           await connectDb();

  //           let userExists = User.findOne({email: profile.email})

  //           if(!userExists) {
  //               await User.create({
  //                   email: profile.email,
  //                   username: profile.name.replace(" ", "").toLowerCase(),
  //                   image: profile.picture,
  //               })
  //           }
  //           return true;

  //        }catch(err){
  //           console.log("Error checking if user Exists",err)
  //           return false;
  //        }
  //   }
    
  // }
})

export { handler as GET, handler as POST }