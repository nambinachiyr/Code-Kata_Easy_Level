/*
40. Print till next zero

Geekoin40
Medium
Topics
Problem Statement:
Given a number N followed by N elements, if the number '0' occurs, print the proceeding numbers until the next '0' is encountered. If there are no balancing 0's, print -1.


Input Description:
The input consists of an integer N, followed by N elements. N is constrained such that 1 < N <= 100000.


Output Description:
Print the numbers between the first two occurrences of '0'. If there are no two '0's, print -1.


Sample Input:
10
1 1 1 0 1 0 1 1 0 1


Sample Output:
1 1 1



*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr){
  let count = false
  let numBetweenZero = []
  for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
      for(let j = i+1;j<arr.length;j++){
        if(arr[j]!=0){
          numBetweenZero.push(arr[j])
        }else{
          count = true;
          break;
        }
      }
    }
    if(count){
      break;
    }
  }
  !count?console.log(-1): console.log(numBetweenZero.join(' '))
}

inp.on("close", () => {
  console.log(userInput) 
  const arr = userInput[1].split(' ').map(n=>Number(n))
  console.log(arr)
 
  result(arr)
  
});