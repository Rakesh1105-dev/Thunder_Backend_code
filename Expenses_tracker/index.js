import express from "express";
const expenses = [
  {
    id: 1,
    title: "Pizza",
    amount: 300,
    category: "Food",
    date: "2026-07-14"
  },
  {
    id: 2,
    title: "Uber",
    amount: 150,
    category: "Travel",
    date: "2026-07-13"
  },
  {
    id:3,
    title:"rapido",
    amount:200,
    category:"Travel",
    date:"2026-07-13"
  }
];
const app=express();
app.use(express.json());
//************************get request */
app.get("/",(req,res)=>{
    res.send("Welcome to the home page of Expenss trcker");
})
//maximum amount ke liye request:-
app.get("/expenses/maximumamount",(req,res)=>{
let  maxi=expenses[0];
for(let nums of expenses ){
  if(nums.amount>maxi.amount){
    maxi=nums;
  }
  else{
    continue;
  }
}
res.json({
  maximumamount :maxi
})
})
//minimum amount ke liye rquest:-
app.get("/expenses/minamount",(req,res)=>{
  let min=expenses[0];
  for(let nums of expenses){
    if(nums.amount<min.amount){
   min=nums;
    }
    else{
      continue;
    }
  }
  res.json({
    minimum_amount:min
  })
})
// total amount request fetch:-
app.get("/expenses/totalamount",(req,res)=>{
  const total=expenses.reduce((pre,curr)=>{
    return pre+curr.amount;
  },0)
  res.json({
    totalexpenses:total
  });
})

//***********get req for id by route_params */ localhost:3000/expenses/4
app.get("/expenses/:id",(req,res)=>{
const index=expenses.findIndex((unique)=>unique.id===Number(req.params.id));
if(index>=0){
res.json(expenses[index]);
}
else{
  res.send("invalid id !!");
}

})
// ********************expenses query params */ //localhost:3000/expenses?title=title&category=food&amount=200
app.get("/expenses",(req,res)=>{
    let data=expenses;
    console.log(req.query);
    const {title,category,amount}=req.query;
    if(title){
        data= data.filter((t)=>t.title===req.query.title);
    }
   if(category){
    data=data.filter((c)=>c.category===req.query.category);
   }
   if(amount){
    data=data.filter((a)=>a.amount===Number(req.query.amount));
   }
   res.send(data);
})
// post request :-
app.post("/expenses",(req,res)=>{
  let response=req.body;
  expenses.push(response);
  res.send("data added successfully");
})
//patch request:-
app.patch("/expenses",(req,res)=>{
 const newdata=req.body;
const olddata=expenses.find((i)=>i.id==req.body.id);
if(olddata){
Object.assign(olddata,newdata);
res.send("data updated successfully");
}
else{
  res.send("data not updated");
}
        
})
//delete request:-
app.delete("/expenses/:id",(req,res)=>{
const unique=expenses.findIndex((index)=>index.id===Number(req.params.id));
if(unique>=0){
  res.send(expenses.splice(unique,1));
}
else{
  res.send("id is not found");
}
})
// total expense count:-

app.listen(3000,()=>{
    console.log(`server is listening to the port 3000`);
})