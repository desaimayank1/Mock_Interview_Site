const {Router}=require("express")
const passport=require("passport")

const router=new Router

router.get("/google",passport.authenticate("google",{scope:["profile","email"]}));

router.get("/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:5173",
    failureRedirect:"http://localhost:5173/login"
}))

router.get("/logout", (req, res) => {
    req.logout((err) => {
     if(err) {return next(err)}
      res.redirect("http://localhost:5173/login");
    });
  });

router.get("/success",(req,res)=>{
    // console.log(req.user);
    if(req.user){
        res.status(200).json({message:"User Logged In",user:req.user})
    }else{
        res.status(400).json({message:"not Authorised"});
    }
})

module.exports=router