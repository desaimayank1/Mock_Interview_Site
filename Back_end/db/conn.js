const mongoose=require("mongoose");
require('dotenv').config()

const connectDb=async()=>{
  try {
    const conn= await mongoose.connect( process.env.DATABASE)
    console.log(`MonogoDB is connected at ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

module.exports=connectDb;