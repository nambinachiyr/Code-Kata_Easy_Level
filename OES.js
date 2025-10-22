/*
58. Merge and Sort Two Arrays

Problem Statement:
Given 2 array of size N and M.merge them in sorted order and print it.


Input Description:
The input consists of two integers N and M representing the sizes of the arrays, followed by N integers for the first array and M integers for the second array. The constraints are |N||M| <= 100000.


Output Description:
The output is the merged sorted array.


Sample Input:
5 4
1 2 3 4 5
1 2 3 4


Sample Output:
1 1 2 2 3 3 4 4 5
*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

const difference = (arr1,arr2)=>{
  // let newarr = []
  for(let i = 0;i<arr2.length;i++){
        arr1.push(arr2[i])
  }
  const newarr = arr1.sort((a,b)=>a-b)
process.stdout.write(newarr.join(' '))
 
}

inp.on("close", () => {
  const arr1 = userInput[1].split(' ').map(num=>Number(num))
  const arr2 = userInput[2].split(' ').map(num=>Number(num))
  difference(arr1,arr2)
});