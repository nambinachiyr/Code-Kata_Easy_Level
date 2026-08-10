/*
50. Delete Last K Array Elements

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N,K print the array after deleting the last K elements.


Input Description:
N,K <= 100000


Output Description:
The array after deleting the last K elements.


Sample Input:
5 4
1 2 3 4 5

Sample Output:
1

*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(s1,s2){
  let test = []
 for(let i = 0;i<s1.length;i++){
  s2.includes(s1[i])?s2:test.push(s1[i])
 }
  // console.log(test)
  console.log(test.length===0?-1:test.join(' '))

}

rl.on("close", () => {
  const arr = userInput[0].split(' ') 
  let s1 = arr[0].split('')
  const s2 = arr[1].split('')
  // console.log(s1,s2 ) 

  result(s1,s2)
 
  
});