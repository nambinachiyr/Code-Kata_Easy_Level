/*
96. Least Repeated Characters

Geekoin50
Medium
Topics
Problem Statement:
Given a string, print the least repeated characters in the string.If there are more than one character repeated preserve the order as in the input.


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
codeKata challenge


Sample Output:
odKthng
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
  // console.log(str)
 let SameElement = []
 let diffElement = []
for(let i = 0;i<str.length;i++){
  let count = 0
  for(let j = i+1 ;j<str.length;j++) {
    if(str[i]===str[j]){
      if(!SameElement.includes(str[i])){
        SameElement.push(str[i])
      }
    }
  }
}

for(let i of str){
  if(!SameElement.includes(i) && i!==' '){
    diffElement.push(i)
  }
}

console.log(diffElement.length===0?SameElement.join(''):diffElement.join(''))
}

rl.on("close", () => {
  // console.log(userInput)
 let str = userInput[0].split('')
 
  result(str)
});