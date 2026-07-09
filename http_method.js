const http=require('http');
const database=[
    {name:"rohit",age:20,email:"rohit@getMaxListeners.com"},
    {name:"rakesh",age:22,email:"rakesh@getMaxListeners.com"},
    {name:"ramesh",age:30,email:"ramesht@getMaxListeners.com"},
    {name:"rajesh",age:23,email:"rajesh@getMaxListeners.com"},
    {name:"mukesh",age:24,email:"mukesh@getMaxListeners.com"}];

const server=http.createServer((req,res)=>{
    //read-operation mtlb get method
if(req.url=="/userdata"){
    res.end(JSON.stringify(database));
}
//this is post method:- to cereate a new data.
else if(req.url=="/createdata"){
    database.push({name:"yash keshari",age:22,email:"yash31@gmail.com"});
    res.end("data is added");
}
//delte data:
else if(req.url=="/deldata"){
    database.pop();
    res.end("data is deleted");
}
})
const port=9000;
server.listen(port,()=>{
    console.log(`servre is listening to ${port}`);
})