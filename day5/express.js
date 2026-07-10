import express from "express";

const app=express();
const database=[];
//yeh aap ek object hai jo cos
app.use(express.json()); //ek ek middleware bhi hai

app.get("/user",(req,res)=>{
    res.send(JSON.stringify(database));
})
app.post("/user",(req,res)=>{
    database.push(req.body);
    
    res.send("user data is added")
    
})
const port=4000;
app.listen(port,()=>{
    console.log(`server is listening to the port${port}`);
})