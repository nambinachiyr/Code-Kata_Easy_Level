/*
95. Print 1st and 3rd Character

Geekoin40
Medium
Topics
Problem Statement:
Given a string S, print the 1st and 3rd character of the string (chracter index starts from 1).


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
codekata


Sample Output:
cd
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
//  console.log(str)
 let first_And_Third_char = []
 for(let i = 0;i<4;i++){
   if(i===0 || i=== 2){
    //  console.log(i)
     first_And_Third_char.push(str[i])
   }
    
    }
  console.log(first_And_Third_char.join(''))
}

rl.on("close", () => {
  // console.log(userInput)
 let str = userInput[0].split('')
 
  result(str)
});