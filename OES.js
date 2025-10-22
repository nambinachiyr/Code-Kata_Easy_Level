/*
55. Counting Distinct Pairs

Problem Statement:
Given an array A of N elements, count the number of distinct pairs (i,j) such that i < j and A[i] < A[j].If no such pairs can be made print -1


Input Description:
The input consists of an integer N, representing the number of elements, followed by N space-separated integers representing the elements of array A.


Output Description:
The output is a single integer representing the count of distinct pairs (i,j) such that i < j and A[i] < A[j]. If no such pairs can be made, print -1.


Sample Input:
5
1 2 3 4 5


Sample Output:
10

*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

const difference = (arr1)=>{
  let count = []
  for(let i = 0;i<arr1.length;i++){
    for(let j = i+1;j<arr1.length;j++){
      if(arr1[i]<arr1[j]){
        let newArr = [arr1[i],arr1[j]]
        count.push(newArr)
      }
    }

  }if(count.length===0) return console.log(-1);
  const setArr = new Set(count.map(pair=>pair.sort((a,b)=>a-b).join(',')))
  console.log(setArr.size)
}

inp.on("close", () => {
  const arr1 = userInput[1].split(' ').map(num=>Number(num))
  
  difference(arr1)
});