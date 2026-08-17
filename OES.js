/*
142. Date Format Validation

Geekoin50
Medium
Topics
Problem Statement:
Accept a string and find if it is of date format 'dd/mm/yyyy'.


Sample Input:
01/13/1999


Sample Output:
no
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(date) {
//  console.log(date)   //day/mm/year
 let [day,mm,yr] = date.split('/')
//  console.log(day,mm,yr)
 let days = []
 for(let i = 1;i<=31;i++){
  days.push(i)
 }
 let months = []
 for(let i = 1;i<=12;i++){
  months.push(i)
 }
 function remove0(d){
  let splitD = d.split('').map(n=>Number(n))
  // console.log(splitD)
  if(splitD[0]===0){
    return splitD[1]
  }else{
   return Number(d)
  }
 }

 if(yr.split('').length===4 && day.split('').length===2 && mm.split('').length===2){
    
       if( !months.includes(remove0(mm)) ||!days.includes(remove0(day))){
        console.log("no")
       }
    
     else if(days.includes(remove0(day)) && months.includes(remove0(mm))){
      console.log('yes')
     }
 }else{
  console.log('no')
 }
 
}
rl.on('close', () => {
const date = userInput[0]

 result(date)
});
