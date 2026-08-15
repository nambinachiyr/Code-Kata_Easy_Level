/*
100. Power of Two Check-2

Geekoin40
Medium
Topics
Problem Statement:
Given a number N, check if it is a power of 2.


Input Description:
The input consists of a number N, where 1 <= N <= 100000.


Output Description:
Print 'yes' if N is a power of 2, otherwise print 'no'.


Sample Input:
64

Sample Output:
yes

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n){
  
  let isPwerOf2 = false
  if(n===1){
    console.log("yes")
  }else{
  for(let i = 1 ;n!==0;i++){
      n = n/2
      if(Number.isInteger(n)){
        if(n===1){
          isPwerOf2 = true
          console.log("yes")
          break
        }else{
        continue
        }
      }else{
        console.log('no')
        isPwerOf2 = false
        break
      }
    }
  }

}

rl.on("close", () => {
  // console.log(userInput)
 let n = Number(userInput[0])
 
  result(n)
});