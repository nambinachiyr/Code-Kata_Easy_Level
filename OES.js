/*
101. Power of a Number

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers N and K.check if N is a power of K.Print 'yes' if it is a power of k otherwise print 'no'.


Sample Input:
64 8


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

function result(n,k){
  console.log(n,k)
  for(let i = 1 ;n!==0;i++){
      n = n/k
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



rl.on("close", () => {
  // console.log(userInput)
 let [n,k] = userInput[0].split(' ').map(n=>Number(n))
 
  result(n,k)
});