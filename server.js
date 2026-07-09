const http=require('http');
const user=[
    {"name":"rakesh",
     "age":20,
     "rollo no":2400387272,
     "college_name":"abcs college mathura",
     "admission number":1216817,
     "address":"lal bahardur sastri road jaipur",
     "phone_number":987432446
    },
  {
    "name": "User1",
    "age": 18,
    "roll_no": 2400387001,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216801,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 1",
    "phone_number": 9874300001
  },
  {
    "name": "User2",
    "age": 19,
    "roll_no": 2400387002,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216802,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 2",
    "phone_number": 9874300002
  },
  {
    "name": "User3",
    "age": 20,
    "roll_no": 2400387003,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216803,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 3",
    "phone_number": 9874300003
  },
  {
    "name": "User4",
    "age": 21,
    "roll_no": 2400387004,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216804,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 4",
    "phone_number": 9874300004
  },
  {
    "name": "User5",
    "age": 22,
    "roll_no": 2400387005,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216805,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 5",
    "phone_number": 9874300005
  },
  {
    "name": "User6",
    "age": 23,
    "roll_no": 2400387006,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216806,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 6",
    "phone_number": 9874300006
  },
  {
    "name": "User7",
    "age": 24,
    "roll_no": 2400387007,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216807,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 7",
    "phone_number": 9874300007
  },
  {
    "name": "User8",
    "age": 25,
    "roll_no": 2400387008,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216808,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 8",
    "phone_number": 9874300008
  },
  {
    "name": "User9",
    "age": 26,
    "roll_no": 2400387009,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216809,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 9",
    "phone_number": 9874300009
  },
  {
    "name": "User10",
    "age": 27,
    "roll_no": 2400387010,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216810,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 10",
    "phone_number": 9874300010
  },
  {
    "name": "User11",
    "age": 18,
    "roll_no": 2400387011,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216811,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 11",
    "phone_number": 9874300011
  },
  {
    "name": "User12",
    "age": 19,
    "roll_no": 2400387012,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216812,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 12",
    "phone_number": 9874300012
  },
  {
    "name": "User13",
    "age": 20,
    "roll_no": 2400387013,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216813,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 13",
    "phone_number": 9874300013
  },
  {
    "name": "User14",
    "age": 21,
    "roll_no": 2400387014,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216814,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 14",
    "phone_number": 9874300014
  },
  {
    "name": "User15",
    "age": 22,
    "roll_no": 2400387015,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216815,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 15",
    "phone_number": 9874300015
  },
  {
    "name": "User16",
    "age": 23,
    "roll_no": 2400387016,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216816,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 16",
    "phone_number": 9874300016
  },
  {
    "name": "User17",
    "age": 24,
    "roll_no": 2400387017,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216817,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 17",
    "phone_number": 9874300017
  },
  {
    "name": "User18",
    "age": 25,
    "roll_no": 2400387018,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216818,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 18",
    "phone_number": 9874300018
  },
  {
    "name": "User19",
    "age": 26,
    "roll_no": 2400387019,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216819,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 19",
    "phone_number": 9874300019
  },
  {
    "name": "User20",
    "age": 27,
    "roll_no": 2400387020,
    "college_name": "ABCS College Mathura",
    "admission_number": 1216820,
    "address": "Lal Bahadur Shastri Road, Jaipur, House No. 20",
    "phone_number": 9874300020
  }


];

const server=http.createServer((request,response)=>{
  // response.end("hello Rakesh kundu how are you");
  //localhost:3000/15
  const str=request.url;
  let str1="";
  for(let i=1;i<str.length;i++)
     str1+=str[i];
    let number=Number(str1);
  const arr=[];
  for(let i=0;i<number;i++){
    arr.push(user[i]); 
  }
   response.end(JSON.stringify(arr));


});
server.listen(3000,()=>{
    console.log("Server is listening to the port 3030");
})