/*
135. Remove Duplicates from Array

Geekoin40
Medium
Topics
Problem Statement:
Given a number N and an array of N elements, print the array after removing duplicate elements.If no duplicate elements found print the same.


Input Description:
Input Size : N <= 100000


Sample Input:
4
2 4 4 2


Sample Output:
2 4

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(arr) {
  for(let i= 0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
       for(k=j;k<=arr.length-1;k++){
        // console.log(arr[k],arr[j+k])
         arr[k] = arr[k+1] 
       }      
       arr.length--
       j--
    }
      // console.log(arr)
    }
  }
  console.log(arr.join(' '))
}

rl.on('close', () => {
  const n = userInput[0];
  const arr = userInput[1].split(' ').map((n) => Number(n));
  result(arr);
});
