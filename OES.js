/*
870. Hollow Pyramid Pattern

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate a hollow full pyramid pattern using stars.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the star hollow full pyramid with the given integer R.


Explanation:
From the given input R=5, print the hollow full pyramid star pattern with size 5.


Sample Input:
5


Sample Output:


    *  
   * *  
  *   *  
 *     *  
* * * * *  
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
  for(let row = 1;row<=nums;row++){
    let str = ''
    for(let space = 1;space<=nums-row;space++){
      str = ' ' + str
    }
    for(let star = 1;star<=row;star++){
      if(star===1 || row===nums || star===row){
      str = str + '*'
     }else{
      str = str+' '
     }
     if(row!==star){
      str+=' '
     }
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
