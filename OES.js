/*
111. Bitwise AND of Array Elements

Geekoin40
Medium
Topics
Problem Statement:
Given a number N and an array of N elements ,find the Bitwise AND of the array elements.


Input Description:
The input consists of an integer N, representing the size of the array, followed by N array elements. N <= 100000.


Output Description:
The output is the Bitwise AND of all elements in the array.


Sample Input:
4
4 3 2 1


Sample Output:
0

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,arr){
  let preValue;
 for(let i= 0;i<arr.length;i++){
   if(i!==arr.length-1){
    if(!preValue){
      preValue = arr[i]&arr[i+1]
      console.log(preValue)
    }
    let now = arr[i]&arr[i+1]
    console.log(preValue,now)
     preValue = preValue&now
   }
 }
 console.log(preValue,"pr")
}
rl.on("close", () => {
 const n = Number(userInput[0])
 const arr = userInput[1].split(' ').map(n=>Number(n))

 result(n,arr)
});