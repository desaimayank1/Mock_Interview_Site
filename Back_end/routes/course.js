const {Router}=require("express")
const passport=require("passport")
const userdb=require("../model/courseSchema")
const coursedb = require("../model/courseSchema")

const router=new Router

router.post("/",async (req,res)=>{
    try {
        const course=await userdb.create({
            ...req.body
        });
        res.status(200).send("Done")
    } catch (error) {
        res.status(500).send({
            error:"something went wrong"
        })
    }
})

router.get("/",async(req,res)=>{
    try {
        const googleId=req.query.googleId;
        console.log(googleId)
       const courses=await coursedb.find({UserId:googleId})
    //    console.log(courses)
       res.status(200).send(courses)
    } catch (error) {
        res.status(500).send({
            error:"something went wrong"
        })
    }
})

module.exports=router