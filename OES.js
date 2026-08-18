/*
155. Even or Odd Product

Geekoin50
Medium
Topics
Problem Statement:
Given a number N and an array of N integers, predict if the product of all elements would be even or odd(actual multiplication may lead to overflows ai <= 100000000).If there is only one element present in the array print whether that number is odd or even.


Input Description:
The input consists of a number N, followed by an array of N integers. N is up to 100000.


Output Description:
The output should be 'even' or 'odd', indicating whether the product of all elements is even or odd. If there is only one element, it indicates whether that single element is odd or even.


Sample Input:
4
2 4 4 2


Sample Output:
even

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});


 function result(n,nums){

  // WE dont do multiplication here bcz the amount is huge so we use the simple trick for this 
  //1.if all element is ODD that only we should print ODD
  //2.If Only one element is Even then the whole array is even

 let even = false ;
 for(let i of nums){
  if(i % 2 ===0 ){
    even = true
    break;  
  }
}
console.log(even?"even":"odd")

 }
  

rl.on('close', () => {  
  const n = userInput[0]
  const nums = userInput[1].split(' ').map(n=>Number(n)) //in relpace dont split
  

result(n,nums)
});
