/*
877. Number Hollow Inverted Half Pyramid

Geekoin40
Medium
Topics
Problem Statement:
Generate a hollow inverted half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the hollow inverted half pyramid pattern using numbers based on the given integer R.


Explanation:
From the given input R=5, print hollow inverted half pyramid pattern using numbers with the size 5.


Sample Input:
5


Sample Output:


    1  
   1 2  
  1   3  
 1     4  
1 2 3 4 5  
 
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

  for(let row = 1 ;row<=nums;row++){
    let str = ''

    for(let space = 1;space<=nums-row;space++){
      str += ' '
    }
    for(let i= 1;i<=row;i++){      
      if(i===1 || i===row || row===nums){
        str +=i
      }else{
        str = str+' '
      }if(row!==i){
        str=str+' '
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
