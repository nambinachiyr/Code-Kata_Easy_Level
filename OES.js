/*
84. String Numeric Validation

Geekoin40
Medium
Topics
Problem Statement:
Given a string S.Validate if a given string is numeric.print 'yes' if it is a numeric otherwise print 'no'.


Sample Input:
guvigeeks


Sample Output:
no
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(str){
//   let isNumber = false
//  for(let i of str){
//   if(i<'0' || '9'>i){
//     if(Number(i)){
//     isNumber = true
//   }
//   }
// }
// if(isNumber){
//  console.log("yes")
// }else{
//  console.log("no")
// }

// This is the actual answer
if(str.trim() !=='' && !isNaN(Number(str))){
  console.log("yes")
}else{
  console.log("no")
}
 }

rl.on("close", () => {
  const str = userInput[0]
  
  result(str)
});