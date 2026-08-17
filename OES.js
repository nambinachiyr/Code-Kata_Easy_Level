/*
144. Character Frequency Sort

Geekoin50
Medium
Topics
Problem Statement:
Given an array of N elements.find the number of occurences of each character and print it in the decreasing order of occurences, if 2 or more number occurs the same number of times, print the numbers in decreasing order.


Input Description:
Input Size : |N| <= 100000


Sample Input:
5
3 3 4 4 7


Sample Output:
4 3 7
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(n,arr) {
   let decreasingArr = arr.sort((a,b)=>b-a)
  //  console.log(decreasingArr)
   let sameElements = []

   for(let i = 0;i<decreasingArr.length-1;i++){
    if(decreasingArr[i]===decreasingArr[i+1]){
      if(!sameElements.includes[decreasingArr[i]]){
        sameElements.push(decreasingArr[i])
      }
    }
   }
  //  console.log(sameElements)
   for(let i = 0;i<decreasingArr.length;i++){
    if(!sameElements.includes(decreasingArr[i])){
      sameElements.push(decreasingArr[i])
    }
   }
   console.log(sameElements.length===0?decreasingArr.join(' '):sameElements.join(' '))
  }

rl.on('close', () => {
const n = Number(userInput[0])
const arr = userInput[1].split(' ').map(n=>Number(n))
result(n,arr)
});
