/*
871. Solid Half Diamond Pattern

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate a solid half diamond pattern using stars.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the solid half diamond pattern based on the given integer R.


Explanation:
From the given input R=5, print the solid half diamond pattern with the size 5.


Sample Input:
5


Sample Output:


*  
**  
***  
****  
*****  
****  
***  
**  
*  
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
  for(let row = 1;row<nums;row++){
    let str = ''
   for(let star = 1;star<=row;star++){
    // if(star===row){
      str = str+ '*' // this question is withOut space
    // }
    // else{
      // str = str+"* "
    // }
   }
   console.log(str)
  }
  for(let row = nums;row>=1;row--){
    let str = ''
   for(let star = row;star>=1;star--){
    // if(star===1){
      str = str+ '*'
    // }
    // else{
    //   str = str+"* "
    // }
   }
   console.log(str)
  }
  }
 

rl.on('close', () => {  

  const nums = userInput.map(n=>Number(n))  
 
if(nums<=100 && nums>=1){
  result(nums[0])
}
});
