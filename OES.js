/*
87. String Case Conversion

Geekoin50
Medium
Topics
Problem Statement:
Given a string S change upper case to lowercase and lowercase to uppercase.


Input Description:
The input consists of a string S with size |s| <= 10000000 (complexity O(n)).


Sample Input:
CodEkaTa


Sample Output:
cODeKAtA
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
  let newStr = ''
  for(let i of str){
    if(i===i.toLowerCase()){
      newStr = newStr+i.toUpperCase()
    }
    else{
      newStr = newStr + i.toLowerCase()
    }
  }
  console.log(newStr)
}
rl.on("close", () => {
 
  const str = userInput[0]
  // console.log(str)
  
  result(str)
});