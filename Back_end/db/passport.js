const mongoose=require("mongoose")
const passport=require("passport")

const userdb=require("../model/userSchema")
const OAuth2Strategy=require("passport-google-oauth2").Strategy

passport.use(
    new OAuth2Strategy({
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]   
    },
    async(aaccessToken, refreshToken, profile, done)=>{
        try {
          let user=await userdb.findOne({googleId:profile.id}) ;

          if(!user){
            user=new userdb({
                googleId:profile.id,
                displayName:profile.displayName,
                email:profile.email[0].value,
                image:profile.photos[0].value
            });

            await user.save();
          }
          return done(null,user);
        } catch (error) {
            return done(error,null)
        }
    }
)
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})