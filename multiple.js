const http=require('http');
const temp=require('url');
const server=http.createServer((request,response)=>{
if(request.url.includes("?")){
    const parsed=temp.parse(request.url,true);
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
}
else{
    const path=request.url.split('/');
    const opt=path[1];
    const num1=Number(path[2]);
    const num2=Number(path[3]);
    if(opt=='add'){
        response.end(JSON.stringify(num1+num2));
    }
    else if(opt=='sub'){
        response.end(JSON.stringify(num1-num2));
    }
    else if(opt=='mul'){
        response.end(JSON.stringify(num1*num2));
    }
    else if(opt=='div'){
        response.end(JSON.stringify(num1/num2));
    }
    else{
        response.end('invalid url');
    }
}
});
const port=2020;
server.listen(port,()=>{
    console.log(`server is listning to the ${port}`);
})