import http from 'http';
const database=[
    {name:"rakesh",age:20,email:"rakesh@gmal.com",amount:100},
    {name:"yash",age:22,email:"yash@gmal.com",amount:10},
    {name:"prem",age:22,email:"prem@gmal.com",amount:100},
    {name:"arijit",age:24,email:"arijit@gmal.com",amount:100},
]
//http request ka use karne wale hai using out postman method:-

const server=http.createServer((req,res)=>{
    if(req.url=="/user"&& req.method=="GET"){
        res.end(JSON.stringify(database));
    }
    //post request ko handle karne ke liye:-
    else if(req.url=="/user"&&req.method=="POST"){
          let body="";
    req.on('data',(chunk)=>{
        body+=chunk;
    })
    req.on('end',()=>{
        const user=JSON.parse(body);
        database.push(user);
        res.end("data is created successfullly");
    })
    }
    //patch request karna hai:-
    else if(req.url=="/user"&&req.method=="PATCH"){
              let body="";
    req.on('data',(chunk)=>{
        body+=chunk;
    })
    req.on('end',()=>{
         const user=JSON.parse(body);
       const finduser=database.find((u)=>u.email==user.email);
       Object.assign(finduser,user);
       res.end("inforamtion updated successfully");
    })
    }
})


const port=3000;
server.listen(port,()=>{
    console.log(`servre is listening to the port ${port}`);
})