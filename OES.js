/*
140. Common Numbers in Sorted Order

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N and M followed by N numbers and M numbers, print the common numbers in sorted order.


Input Description:
N,M <= 100000 (ie do it in O(n) time complexity)


Output Description:
The common numbers in sorted order.


Sample Input:
5 4
1 2 3 4 5 1 2 3 4


Sample Output:
1 2 3 4
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(n,k,arr1,arr2) {
    console.log(arr2[0])
    let isTrue = false
    let sameElement = []
  for(let i = 0 ;i<n-1;i++){
   for(let j =i ;j<k;j++){
    if(arr1[i]===arr2[j]){
    isTrue = true
    sameElement.push(arr1[i])
    break
   }else{
    isTrue = false
    break
   }
   }
  }
  console.log(isTrue?sameElement.join(' '):-1)
}
rl.on('close', () => {
const [n,k] = userInput[0].split(' ').map(n=>Number(n))
const nums = userInput[1].split(' ').map(n=>Number(n))
const arr1 = nums.slice(0,n)
const arr2 = nums.slice(n,n+k)
// console.log(arr1,arr2,nums)
 result(n,k,arr1,arr2)
});
