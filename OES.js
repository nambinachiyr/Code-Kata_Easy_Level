/*
67. Swap Odd Even String Characters

Geekoin40
Medium
Topics
Problem Statement:
Given a string 'S' swap the even and odd characters starting from index 1(Assume the index starts from 0).


Input Description:
Input Size : |s| <= 10000000(complexity O(n))


Sample Input:
codekata


Sample Output:
ocedakat

*/

const readline = require('readline');
const { once } = require('stream');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(a){
  for(let i = 0 ;i<a.length;i++){
    if(i%2===0 ){
      let temp = a[i]
      a[i] = a[i+1]
      a[i+1]= temp
      if(i === a.length-1){
        break
      }
    console.log(a[i],temp,a[i+1])
    }
  }
  console.log(a.join(''))
 }

rl.on("close", () => {
  let a = userInput[0].split('')  
  result(a)
});