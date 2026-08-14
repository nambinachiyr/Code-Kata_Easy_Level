/*
86. Remove Extra Spaces

Geekoin40
Medium
Topics
Problem Statement:
Given a sentence S take out the extra spaces.If no extra space is present print the same as output.


Input Description:
Input Size : |s| <= 100000(complexity O(n))


Sample Input:
codekata challenge


Sample Output:
codekata challenge
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
  if(str.includes('')){
    const withOutSpace = str.filter(e=>
      e !== ''
    )
    console.log(withOutSpace.join(' '))
  }else{
    console.log(str.join(' '))
  }
 }

rl.on("close", () => {
 
  const str = userInput[0].split(' ')
  console.log(str)
  
  result(str)
});