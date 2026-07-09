const http=require('http');
const url=require('url');
const database=[
    {name:"rohit",age:20,email:"rohit@getMaxListeners.com"},
    {name:"rakesh",age:22,email:"rakesh@getMaxListeners.com"},
    {name:"ramesh",age:30,email:"ramesht@getMaxListeners.com"},
    {name:"rajesh",age:23,email:"rajesh@getMaxListeners.com"},
    {name:"mukesh",age:24,email:"mukesh@getMaxListeners.com"}];
//create user ke liye ek fucntion:-
function createuser(user){
database.push(user);
}
//deleted user ke liye function:-
function  deleteuser(user){//user=parsed.query.name
    for(let i=0;i<database.length;i++){
        if(database[i].name==user){
            database.splice(i,1);
            break;
        }
    }
}

const servre=http.createServer((req,res)=>{
const parsed=url.parse(req.url,true);
console.log(req.url);

const operation=parsed.pathname.slice(1);

if(operation=="createdata"){
createuser(parsed.query);
res.end("user data is added");
}

else if(operation=="deldata"){
    deleteuser(parsed.query.name);
    res.end("user data is deleted");
}
//and get data ke liye:-
else if(operation=="getdata"){
    res.end(JSON.stringify(database));
}
})
const port=3030;
servre.listen(port,()=>{
    console.log(`server is listening to the ${port}`);
})