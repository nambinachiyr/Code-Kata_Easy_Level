/*
72. Cyclic Right Shift Array

Geekoin40
Medium
Topics
Problem Statement:
Given two numbers N,K followed by an array of N elements, print the array after doing right shift K times (in cyclic manner).


Input Description:
The input consists of two numbers N, K, followed by an array of N elements. Input Size: 1 <= N, K <= 100000.


Output Description:
The output is the array after performing a right cyclic shift K times.


Sample Input:
3 2
7 2 3


Sample Output:
 3 7

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(a,N,K){
  let count = 0
  for(let i = 0;i<K;i++){
  //  console.log("Running")
    if(count!==K){
      for(let i = 0 ;i<N-1;i++){         
        if(count!==K){
          let pop =  a.pop()
          a.unshift(pop)
          count++
         if(count===K){
          break;
         }
        }
        console.log(count)
        if(count === K){
          break;
        } 
    }
  }else{
    break
  }
  // console.log(count)
  }

 console.log(a.join(' '))
 }

rl.on("close", () => {
  let [N,K] = userInput[0].split(" ") .map(n=>Number(n))
  let a = userInput[1].split(' ')
  result(a,N,K)
});