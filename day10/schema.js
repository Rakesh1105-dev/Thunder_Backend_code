//yeha pe me apne schema ko desgin karunga

import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
//jos jis bhi filed ki zaroorat hai me usko schema ke ander define karunga
//jaise ki name,accountnumber,city,age,balance,accounttype
name:{
    type:String,
    minLength:3,
    maxLength:20,
    trim:true,
    required:true, //iska mtlb hai ki agar user ne name filed ko khali beja diya hai toh data reject kar deneg
},
accountNumber:{
type:Number,
required:true,
unique:true,
index:true,
},
city:{
     type:String,
    minLength:3,
    maxLength:20,
    trim:true,
    required:true,
},
age:{
    type:Number,
    min:18,
    max:100,
},
balance:{
    type:Number,
    min:0,
    required:true,
},
accountType:{
    type:String,
    required:true,
    enum:["current","saving"],
    default:"saving",
}
},{timestamps:true});
//yeh timestamps 2 functionlity deta hai createAt and updatedAt ka
//createAt:the date representing  when this document was created
//updatedAt: the date representing  when this document was last created.

//ab schema banne ke bad mujhe banana padega mongoose ka model:-

 const Customer=mongoose.model("Customer",userSchema);//yeh model ek object bana de raha hain jisse ki me database me bana huaa collection se connect kar pate hai
  //yeh customer ek object form ban chuka hai
 //database ke ander ek customer schema build ho jayega.
 export default Customer;