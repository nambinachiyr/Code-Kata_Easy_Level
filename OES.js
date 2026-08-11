/*
63. Unique Characters in a String

Geekoin40
Medium
Topics
Problem Statement:
Given a String S,print the number of unique characters in it.If all the characters are duplicated,then print -1.


Sample Input:
GUVIGEEK


Sample Output:
4
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr){

  let count = 0
  let test = []
  let uniqueChar = ''
  for (let i = 0 ; i<arr.length;i++){
    let ch = arr.charAt(i)
    if(arr.indexOf(ch)===arr.lastIndexOf(ch)){
      uniqueChar = uniqueChar+ch
    }
  }
console.log(uniqueChar.length===0?-1:uniqueChar.length)
  }


rl.on("close", () => {
  let arr = userInput[0]
  result(arr) 
  
});