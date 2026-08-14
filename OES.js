/*
85. Sort Strings by Length and Lexicographically

Geekoin50
Medium
Topics
Problem Statement:
Given an array of N strings sort it in ascending order based on the length of the string.If two strings are found to have the same length sort them in lexicographical order.


Sample Input:
3
coding platform codekata


Sample Output:
coding codekata platform
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,str){
  let newArr = str.sort((a,b)=>{
    console.log(a,b)
    if(a.length<b.length){
      return -1
    }else if(a.length>b.length){
      return 1
    }else{
     if(a<b){
      return -1
     }else {
      return 1
     }
    }
  })
  console.log(newArr)
 }

rl.on("close", () => {
  const n = userInput[0]
  const str = userInput[1].split(' ')
  
  result(n,str)
});