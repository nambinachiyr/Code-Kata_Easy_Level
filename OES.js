/*
141. Counting Subarrays

Geekoin40
Medium
Topics
Problem Statement:
Given an array print the number of subarrays that can be formed with it.


Input Description:
The input consists of an integer N representing the size of the array, where N <= 100000, followed by N space-separated integers representing the array elements.


Output Description:
The output is a single integer representing the total number of subarrays that can be formed from the given array.


Sample Input:
5
1 2 3 2 1


Sample Output:
15
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(n,nums) {
  //  console.log(n,nums)
   let subarrayCount = 0
   for(let i = n;i>=1;i--){
    // console.log(i)
    subarrayCount = subarrayCount+i
   }
   console.log(subarrayCount)
}
rl.on('close', () => {
const n= userInput[0].split('').map(n=>Number(n))[0]
const nums = userInput[1].split(' ').map(n=>Number(n))

// console.log(arr1,arr2,nums)
 result(n,nums)
});
