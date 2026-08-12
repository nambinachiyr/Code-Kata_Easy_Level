/*
75. Max Repeated Character Count

Geekoin50
Medium
Topics
Problem Statement:
Given a string S,count the maximum number of times a character repeated in the string.If no character is repeated print '0'.


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
codekata


Sample Output:
2
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
  let MaxCount = 0
  for(let i=0;i<str.length;i++){
    let count = 1
    for(let j=i+1;j<str.length;j++){
     if(str[i]===str[j]){
      count++
      // console.log(str[i],i,'-',j,str[j])
      // console.log(count)
     }
    }
    if(MaxCount<count){
     MaxCount = count
    }
    
  }
  console.log(MaxCount)
 }

rl.on("close", () => {
  let str = userInput[0].split("")  
  result(str)
});