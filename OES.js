/*
881. Character Pattern Generation

Geekoin40
Medium
Topics
Problem Statement:
Generate the following pattern.


*****  
b****  
bb***  
bbb**  
bbbb*  

Input Description:
Input consists of a single integer that corresponds to n, the number of rows.Where 1<=R<=100


Output Description:
Print the character pattern from the given input n.


Explanation:
From the given input n= 5,so that print 5 rows of character pattern.


Sample Input:
5


Sample Output:


*****  
b****  
bb***  
bbb**  
bbbb*  

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
  for(let row = nums ;row>=1;row--){
    let str = ''
  for(let leftSpace = 1;leftSpace<=nums-row;leftSpace++){
    str += 'b'
  }
  for(let leftStar = 1;leftStar<=row;leftStar++){
    str+='*'
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
