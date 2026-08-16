/*
123. Repeating Digits Check

Geekoin40
Medium
Topics
Problem Statement:
Given a number N,check whether it has repeating digits in it.print 'yes' if it has repeating digits otherwise print 'no'.


Sample Input:
11234


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

function result(nums){

  let isThere = false
  for(let i = 0;i<nums.length;i++ ){
    for(let j = i;j<nums.length;j++){

      if(i!==nums.length){
        if(nums[i]===nums[j+1]){
          isThere = true
          break
        }
      }
    }
  }
 console.log(isThere?"yes":"no")
}
rl.on("close", () => {
//  const n = Number(userInput[0])
 const nums = userInput[0].split('').map(n=>Number(n))
 
 result(nums)
});