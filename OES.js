/*
42. Pair Sum Check

Geekoin50
Medium
Topics
Problem Statement:
Given 2 numbers N,X and an array of N elements, check if there exists any 2 numbers in the array with sum equal to X.If found print 'yes' otherwise print 'no'


Input Description:
The input consists of two numbers N and X, and an array of N elements. N and X are up to 100000.


Output Description:
Print 'yes' if two numbers with sum equal to X are found in the array, otherwise print 'no'.


Sample Input:
4 4
2 2 0 0


Sample Output:
yes



*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr,X){
  let count = false
  for(let i=0;i<arr.length;i++){    
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j] === X){
        // console.log(arr[i],'-',arr[j])
        //  console.log("yes")
         count = true
         break;
      }
    }
    if(count){
      break
    }
  }
  count ?console.log("yes"): console.log("no")
}

inp.on("close", () => {
  console.log(userInput) 
  const [N,X] = userInput[0].split(' ').map(Num=>Number(Num))
  const arr = userInput[1].split(' ').map(Num=>Number(Num))
  console.log(arr)
  result(arr,X)
  
});