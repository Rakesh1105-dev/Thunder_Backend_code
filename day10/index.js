import express from "express";
import mongoose from "mongoose";
import Customer from "./schema.js";
import Users from "./data.js";
const app=express();
 await mongoose.connect("mongodb+srv://rikskundu_db_user:pASJ2aMx77jeQ3ym@cluster0.yz0cvod.mongodb.net/Practice");
 app.use(express.json());

 app.post("/customer",async (req,res)=>{
  const customer= await Customer.create(req.body);
  res.json({
    message:"user data created successfully",
    customer:customer
  });
 })
 //data ko bulk me insert karna ho toh:_
 app.post("/customer/bulk",async (req,res)=>{
  const customer= await Customer.insertMany(Users);
   res.json({
    message:"user data created successfully",
    customer:customer
  });
 })
 //get request:-
 app.get("/customer",async (req,res)=>{
   const customer= await Customer.find();
   res.json({
    message:"All user data",
    customer:customer
  });
 })
 //filter lagana hai mere data par jiski cit delhi hai:-
 app.get("/customer/filter",async (req,res)=>{
    // const {city,accountType}=req.query;
    // const customer=await Customer.find({city:city,accountType:accountType});
    const customer=await Customer.find(req.query);
    res.json(customer);
 })
 //to get info of a particular user:-
 app.get("/customer/:accountNumber",async (req,res)=>{
  const accountValue=  req.params.accountNumber;
  const customer=await Customer.findOne({accountNumber:accountValue});
  if(!customer){
    res.send({
        message:`customer account number ${accountValue} doesn't exists`,
    })
  }
  else{
       res.json({
    message:"Customer infromation on the basis of account number",
    customer:customer
  });
  }
  
 })

 //now delete request karna hai:-
 app.delete("/customer/:accountNumber",async (req,res)=>{
   const deleteAccount= req.params.accountNumber;
  const customer= await Customer.findOneAndDelete({accountNumber:deleteAccount});
  res.json({
    message:`account number ${deleteAccount} is deleted`,
    customer:customer
  });
 })

 //patch request:-
 //update the city of the user:-
 app.patch("/customer/:accountNumber",async (req,res)=>{
const {city}=req.body;
 const User=await Customer.findOneAndUpdate({accountNumber:req.params.accountNumber},//pahele user ka accountNUMBER KO SEARCH KARUNGA
    //ab jaek update karuga.
    {
        $set:{city:city,age:age}
    },
    {
        new:true,
    }

);
res.json(User);
 })
//now ab mujhe kisi user ke balance ko update karna hai:-
app.patch("/customer/deposit/:accountNumber",async (req,res)=>{
     const {balance}=req.body;
     //pahel me customer ko find karke le ata hu jiska balcne ko deposit karwana hai:-
    const user= await Customer.findOne({accountNumber: req.params.accountNumber});
    user.balance+=balance;
    //database me save karwane ke liye typw this:-
    user.save();
    res.json(user);
})
app.listen(3000,()=>{
    console.log("app is listening to the port 3000");
})