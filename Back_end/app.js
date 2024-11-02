require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const connectdb=require("./db/conn")
const PORT=3000;
const session=require("express-session");
const passport=require("passport")
connectdb();


app.use(cors({
    origin:"http://localhost:5173",
    methods:"GET,POST,DELETE,PUT",
    credentials:true

}));

app.use(express.json());

//setup session
app.use(session({
    secret:"fihji3r8r2ni9",
    resave:false,
    saveUninitialized:true
}))

require("./db/passport")
//setup passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth",require("./routes/auth"))
app.use("/course",require("./routes/course"))
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})