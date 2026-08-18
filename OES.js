/*
159. Max Length Alternating Digits Substring

Geekoin50
Medium
Topics
Problem Statement:
A number is given as input(as string). Find the maximum length of substring alternating digits of odd and even.


Input Description:
The input is a number given as a string. The input size N is less than or equal to 10000000000.


Output Description:
The output is the maximum length of a substring with alternating odd and even digits.


Sample Input:
4123


Sample Output:
4
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});


 function result(nums){
    let length = 1
    let maxLengths = 0
    let subArrLength = []
    let isAlternative = false
    for(let i = 0;i<nums.length-1;i++){
      if((nums[i] % 2 === 0 && nums[i+1] % 2 !==0) ||(nums[i] % 2 !== 0 && nums[i+1] % 2 === 0) ){
        length +=1
        isAlternative = true
        // console.log(length)
       
      
      }
      else{
        isAlternative = false
        length = 1
        continue;
      }

      if(isAlternative){
         if(maxLengths<length){
          maxLengths=length
          subArrLength.push(maxLengths)
        }
      }
    }
    // console.log(maxLengths,subArrLength)
    console.log(subArrLength.sort((a,b)=>b-a)[0])
 }
  

rl.on('close', () => {  
  const nums = userInput[0].split('').map(n=>Number(n)) 
result(nums)
});
