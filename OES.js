/*
80. Encode String by Adding 3

Geekoin40
Medium
Topics
Problem Statement:
Given a string S, print the encoded string by adding 3 to each character(a maps to d,b maps to e,c maps to f and so on).


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
RADAR
Sample Output:
UDGDU
*/

const { match } = require('assert');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(string){
  let words = []
  for(let i of string){
    let num = i.charCodeAt(i)+3
    if(num>90){
      num = num-26
    }
    let newStr = String.fromCharCode(num)
    
     words.push(newStr)
  }

  console.log(words.join(''))
 }

rl.on("close", () => {
  const string = userInput[0].split('')
  result(string)
});