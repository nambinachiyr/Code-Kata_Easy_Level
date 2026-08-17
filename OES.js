/*
Problem
Hints & Solutions
Submissions


131. Max Sum of Consecutive Pairs

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N integers, find the maximum sum of the maximum elements obtained by considering all consecutive pairs of adjacent elements after rearranging the array suitably.


Input Description:
The input consists of a single integer N, followed by N integers representing the elements of the array. N is an integer such that N <= 100000.


Sample Input:
5
1 2 3 4 5


Sample Output:
18
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

// function result(arr) {

  // 3/5
  // let max = 0;

  // function maxNumInPairs(num1, num2) {
  //   console.log(num1, num2);
  //   if (num1 > num2) {
  //     max = num1 + max;
  //     // console.log(max,"NUM1",num1)
  //   } else {
  //     max = num2 + max;
  //     // console.log(max,"NUM2",num2)
  //   }
  // }
  // for (let i = 1; i < arr.length - 1; i++) {
  //   let temp = arr[i + 1];
  //   arr[i + 1] = arr[-i-1];
  //   arr[-1- i] = temp;
  // }
  // console.log(arr);
  // for (let i = 0; i < arr.length - 1; i++) {
  //   maxNumInPairs(arr[i], arr[i + 1]);
  // }

  // console.log(max);
// }
// chatgpt
  function result(arr) {
  arr.sort((a, b) => b - a)

  let sum = 0

  if (arr.length % 2 !== 0) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      sum += arr[i] * 2
    }
  

  console.log(sum)
}
}

rl.on('close', () => {
  const n = userInput[0];
  const arr = userInput[1].split(' ').map((n) => Number(n));
  result(arr);
});
