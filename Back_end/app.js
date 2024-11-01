require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
require("./db/conn")
const PORT=3000;

app.use(cors({
    origin:"http://localhost:5173/",
    methods:"GET,POST,DELETE,PUT",
    credentials:true

}));

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json("server Start")
});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})