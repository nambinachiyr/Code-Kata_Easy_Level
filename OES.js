/*
876. Inverted Half Pyramid Pattern-2

Geekoin30
Easy
Topics
Problem Statement:
Generate a hollow inverted half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the hollow Inverted half pyramid pattern using numbers based on the given integer R.


Explanation:
From the given input R=5,print the hollow inverted half pyramid pattern with the size 5.


Sample Input:
5


Sample Output:


12345  
1  4  
1 3  
12  
1  
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

  for(let row = nums ;row>=1;row--){
    let str = ''
    for(let i= 1;i<=row;i++){      
      if(i===1 || i===row || row===nums){
        str +=i
      }else{
        str = str+' '
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
