/*
179. Uppercase Every Kth Character

Geekoin40
Medium
Topics
Company
Problem Statement:
Given a string and a number K, change every kth character to uppercase from beginning in string.


Input Description:
The input consists of a string and an integer K.


Output Description:
The output is the modified string where every Kth character is converted to uppercase.


Sample Input:
string 2


Sample Output:
sTrInG
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(k,arr) {
  let str = ''
  let count = 0
  for(let i=0; i<arr.length; i++){
    // console.log(k,count)
    count+=1
     if(Number(k)===count){
       str+=arr[i].toUpperCase()
       count=0
      }else{
        str+=arr[i]
      } 
  }
  console.log(str)
}

rl.on('close', () => {
  const [arr,k] = userInput[0].split(' ')
  result(k,arr);
});
