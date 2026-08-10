/*

52. Max of Consecutive Pairs

Geekoin40
Medium
Topics
Problem Statement:
Given a number N followed by N elements for every 2 consecutive numbers print the maximum of the 2.


Input Description:
The input consists of an integer N, followed by N elements. N is an integer such that N <= 100000, implying an O(n) time complexity solution is expected.


Output Description:
The output is a space-separated sequence of the maximums of every two consecutive numbers from the input.


Sample Input:
5
1 1 3 0 5


Sample Output:
1 3 3 5


*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(N,arr){
  let test = [] 
  // console.log(arr)
  for(let i = 0;i<N-1;i++){
    if(arr[i]>=arr[i+1]){
      // console.log(arr[i],"=",arr[i+1])
       test.push(arr[i])
       
    }
    else{
      test.push(arr[i+1])
    }
  }
// console.log(test)
console.log(test.length===0?-1:test.join(' '))
}

rl.on("close", () => {
  const N = userInput[0].split(' ').map(n=>Number(n))
  let arr = userInput[1].split(' ').map(n=>Number(n))
 
  // console.log(s1,s2 ) 

  result(N,arr)
 
  
});