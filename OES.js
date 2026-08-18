/*
153. Print Numbers with Frequency < K

Geekoin50
Medium
Topics
Problem Statement:
Given 2 numbers N,K and an array of N integers, print all numbers in sorted order if it has been repeated less than K times.


Input Description:
Input Size : N,K <= 100000


Sample Input:
4 2
2 4 4 1


Sample Output:
1 2
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});


 function result(n,k,nums){
  // 5/5
  let freq = {}

  let sorted = [...new Set(nums)].sort((a,b)=>a-b)
  for(let num of nums){
    freq[num] = (freq[num] || 0) + 1
  }
  const noCount = sorted.filter(n=>freq[n]<k)
  console.log(noCount.join(' '))

  // O(n^2) /4/5
//  let sorted = nums.sort()
//    let numbers = []
//    let MostRepeated = []
//    for(let i = 0 ;i<n;i++){
//     let count = 1
//     for(let j = i+1;j<n;j++){
//       if(sorted[i]===sorted[j]){
//         count++
//         console.log(sorted[i],'-i',sorted[j],'-j')
//         if(k<=count){
//           if(!MostRepeated.includes(sorted[i])){
//             MostRepeated.push(sorted[i])
//           }
//         }
//       }
//     }
//     if(count<k){
//        numbers.push(nums[i])
//     }
//     console.log(k,count)
//   }
//    let uniqueNum = numbers.filter(n=>!MostRepeated.includes(n))
//    console.log(uniqueNum)
 }
  

rl.on('close', () => {  
  const [n,k] = userInput[0].split(' ').map(n=>Number(n))
  const nums = userInput[1].split(' ').map(n=>Number(n))
  

result(n,k,nums)
});
