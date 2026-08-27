/*
279. Find the Single Number

Geekoin60
Medium
Topics
Problem Statement:
Given a number N followed by an array of N integers, every element appears twice except for one. Find that single one and print it.


Input Description:
The input consists of a number N followed by an array of N integers. N is the size of the array, where N <= 100000.


Output Description:
The output is the single integer that appears only once in the array.


Sample Input:
5
30 5 5 30 -45


Sample Output:
-45
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(num,arr) {
  for(let i =0 ;i<num;i++){
    let count = 0
  for(let j=0; j<num;j++){
    if(arr[i]===arr[j]){
      count=count+1
    }
  }
  if(count===1){
    console.log(arr[i])
  }
 }

}

rl.on('close', () => {
  const [num] = userInput[0].split(' ').map(n=>Number(n));
  const arr = userInput[1].split(' ').map(n=>Number(n))
  result(num,arr);
});
