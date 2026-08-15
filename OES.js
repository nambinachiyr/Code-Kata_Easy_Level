/*
102. Check Sorted Array

Geekoin40
Medium
Topics
Problem Statement:
Given a number N, followed by an array of N elements,print 'yes' if it is a sorted array(either ascending or descending)otherwise print 'no'.


Input Description:
The input consists of a number N, followed by an array of N elements. N is between 1 and 100000.


Output Description:
The output is 'yes' if the given array is sorted (either ascending or descending), otherwise 'no'.


Sample Input:
3
2 3 7


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

function result(n,arr){
  // 4/5

  //  let isSorted = false
  //  let accCount = 0
  //  descCount = 0
  //  for(let i = 0;i<n;i++){
  //   if(i<n){
  //     if(arr[i]<=arr[i+1]){
  //       accCount++
  //       isSorted = true
  //       console.log(accCount,"acc")
  //     }else if(arr[i]>=arr[i+1]){
  //       descCount++
  //       isSorted = true;
  //       console.log(descCount,"dec")
  //     }      
  //   }
  // }
  // if(isSorted && accCount === n-1){
  //   console.log("yes accending")
  // }else if(isSorted && descCount === n-1){
  //   console.log("yes descending")
  // }else{
  //   console.log("no Sorted")
  // }
  // }

  // 5/5

  let accending = true 
  let descending = true
  for(let i =0 ;i<n;i++){
    if(arr[i]>arr[i+1]){
      accending = false
    }else if(arr[i]<arr[i+1]){
      descending = false
    }
  }
  console.log(accending || descending ?"yes":"no")
}


rl.on("close", () => {
  // console.log(userInput)
 let n = Number(userInput[0])
 let arr = userInput[1].split(' ').map(n=>Number(n))
 
  result(n,arr)
});