/*
130. Max Sum of Adjacent Pairs

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N elements, find the sum of the maximum elements obtained by considering all consecutive pairs of adjacent elements.


Input Description:
The input consists of a number N representing the size of the array, followed by N elements. N <= 100000.


Sample Input:
5
1 2 3 4 5


Sample Output:
14
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr){
  let max = 0

  function maxNumInPairs(num1,num2){
    if(num1>num2){
      max = num1+max
    }else{
      max = num2+max
    }
  }
   for(let i = 0;i<arr.length;i++){
    if(i!==(arr.length-1)){
       maxNumInPairs(arr[i],arr[i+1])
    }
   }
   console.log(max)
}
rl.on("close", () => {
const n = userInput[0]
 const arr =  userInput[1].split(' ').map(n=>Number(n)) 
 result(arr)
});