//localhost:4000/add/30/40 ->url=/add/30/40 url=["","add","20","40"]
//localhost:4000/add?num1=10&num2=30->query routes
const http=require('http');
const server=http.createServer((request,response)=>{
let url=request.url.split('/');
const operation=url[1];
const number1=Number(url[2]);
const number2=Number(url[3]);
if(operation=="add"){
response.end(JSON.stringify(number1+number2));
}
else if(operation=="sub"){
response.end(JSON.stringify(number1-number2));
}
else if(operation=="mul;"){
response.end(JSON.stringify(number1*number2));
}
else if(operation=="div"){
response.end(JSON.stringify(number1/number2));
}
else{
    response.end("Invaid operation performed");
}
})
server.listen(4000,()=>{
    console.log("server is listening to the port 4000");
})