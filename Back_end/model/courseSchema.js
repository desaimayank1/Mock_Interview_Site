const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    UserId:String,
    Title:String,
    Description:String,
    TechStack:String,
    Image:String,
    Index:Number
},{timestamps:true})

const coursedb=mongoose.model("courses",courseSchema)

module.exports=coursedb;