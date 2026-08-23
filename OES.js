/*
879. b and * pattern

Geekoin40
Medium
Topics
Problem Statement:
Write a code to generate the following pattern.


*********  
b*******b  
bb*****bb  
bbb***bbb  
bbbb*bbbb  

Input Description:
Input consists of a single integer that corresponds to R, the number of rows. R is always an odd number.Where 1<=R<=100


Output Description:
Print the character with the letter 'b' pattern with the size based on the given integer R.


Sample Input:
5


Sample Output:


*********  
b*******b  
bb*****bb  
bbb***bbb  
bbbb*bbbb  

Explanation:
From the given input R=5,print the character with star pattern.

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
  for(let row = nums ;row>0;row--){
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
