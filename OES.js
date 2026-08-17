/*
134. Sort and Print Original Indices

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N elements,sort the array in increasing order and print the original indices of the elements present in sorted array.


Input Description:
Input Size : N <= 100000


Sample Input:
5
5 4 3 2 1


Sample Output:
5 4 3 2 1
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(arr) {
   let obj = []
   for(let i=0;i<arr.length;i++){
    obj.push({index:i+1,value:arr[i]})
   }

   arr = arr.sort((a,b)=>a-b)
   let position = []
   for(let i=0;i<arr.length;i++){
    for(let j=0;j<obj.length;j++){
       if(obj[j].value===arr[i]){
        position.push(obj[j].index)
       }
      
    }
   }
  //  console.log(obj)
  //  console.log(arr)
   console.log(position.join(' '))
}

rl.on('close', () => {
  const n = userInput[0];
  const arr = userInput[1].split(' ').map((n) => Number(n));
  result(arr);
});
