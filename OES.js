/*
880. Inverted Star Pattern

Geekoin40
Medium
Topics
Problem Statement:
Generate the following inverted character with star pattern.


bbbb*bbbb  
bbb***bbb  
bb*****bb  
b*******b  
*********  

Input Description:
Input consists of a single integer that corresponds to R, the number of rows. R is always an odd number.Where 1<=R<=100


Output Description:
Print the inverted character pattern from the given input size R.


Explanation:
From the given n=5,print the 5 rows of inverted character pattern.


Sample Input:
5


Sample Output:


bbbb*bbbb  
bbb***bbb  
bb*****bb  
b*******b  
*********  

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
  for(let row = 1 ;row<=nums;row++){
    let str = ''
  for(let leftSpace = 1;leftSpace<=nums-row;leftSpace++){
    str += 'b'
  }
  for(let leftStar = 1;leftStar<=row;leftStar++){
    str+='*'
  }
  for(let rightStar = 1;rightStar<=row-1;rightStar++){
    str+='*'
  }
  for(let rightSpace=1 ; rightSpace<nums-row+1;rightSpace++ ){
    str+='b'
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
