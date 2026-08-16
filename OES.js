/*
127. Check Digits 0 to K in N

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and a number K, check if it has all digits from 0 to k in it.


Input Description:
Input Size : N <= 100000


Sample Input:
1234034 4


Sample Output:
yes
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n,k){

  let kArr = []
  for(let i = 0;i<n.length;i++){
    if(n[i]<=k ){
      if(Number.isInteger(n[i])){
      if(!kArr.includes(n[i])){
        kArr.push(n[i])
      }
    }
  }
  }
  console.log(kArr.length===k+1?"yes":"no")
}
rl.on("close", () => {
 const arr = userInput[0].split(' ')
 const n = arr[0].split('').map(n=>Number(n))
 const k =Number( arr[1])
 result(n,k)
});