/*
875. Number Hollow Half Pyramid

Geekoin30
Easy
Topics
Problem Statement:
Generate a hollow half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the hollow half pyramid pattern using numbers based on the given integer R.


Sample Input:
5


Sample Output:


1  
12  
1 3  
1  4  
12345  
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
