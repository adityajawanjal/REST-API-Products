const mongoose = require("mongoose");

const connectDB = async() =>{
   try{
     await mongoose.connect("mongodb://localhost:27017/Rest-API",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("DB Connected...");
   }catch(err){
    console.log(`The error is : ${err}`);
   }
}
module.exports = connectDB;