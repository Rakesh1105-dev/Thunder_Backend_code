//http:localhost:2000/add?num1=20&num2=90
// const user={
//     "pathname":"add",
//     "query":{
//         "num1":50,
//         "num2":30
//     }
// }
const http=require('http');
const url=require('url');
const server=http.createServer((request,response)=>{
const parsed=url.parse(request.url,true);
const operation=parsed.pathname.slice(1);
const number1=Number(parsed.query.num1);
const number2=Number(parsed.query.num2);
if(operation=='add'){
    response.end(JSON.stringify(number1+number2));
}
else if(operation=='sub'){
    response.end(JSON.stringify(number1-number2));
}
else if(operation=='mul'){
    response.end(JSON.stringify(number1*number2));
}
else if(operation=='div'){
    response.end(JSON.stringify(number1/number2));
}
else{
    response.end("inavlid query send");
}
});
const port=2000;
server.listen(port,()=>{
    console.log(`Servre is listenining to the port ${port}`);
})