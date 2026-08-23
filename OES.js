/*
874. Number Pyramid Pattern

Geekoin40
Medium
Topics
Problem Statement:
Generate a full pyramid using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the full pyramid using numbers based on the given integer R.


Explanation:
From the given input R=5,print the full pyramid using numbers with the size 5.


Sample Input:
5


Sample Output:

    1  
   232  
  34543  
 4567654  
567898765  
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
 let num = 1
 let pre = 1
  for(let row = 1 ;row<=nums;row++){
    let str = ''
    for(let space = 1;space<=nums-row;space++){
      str = str+' '
    }
    for(let i= row;i<=(2*row)-1;i++){      
      str +=i
    }
    for(let i=2*row-2;i>=row;i--){
      str=str+i
      // console.log(pre)
      // pre--
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
