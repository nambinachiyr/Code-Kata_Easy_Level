/*
883. Character Pattern

Geekoin40
Medium
Topics
Problem Statement:
Wrrite a code to generate the following pattern.


bbbb*bbbb  
bbb***bbb  
bb*****bb  
b*******b  
*********  
b*******b  
bb*****bb  
bbb***bbb  
bbbb*bbbb  

Input Description:
Given an odd integer R indicates number of rows.R is always an odd number.Where 1<=R<=100


Output Description:
Print the character pattern based on the given input R.


Explanation:
From the given input R=9 indicates the no. of rows to print the character pattern.


Sample Input:
9


Sample Output:


bbbb*bbbb  
bbb***bbb  
bb*****bb  
b*******b  
*********  
b*******b  
bb*****bb  
bbb***bbb  
bbbb*bbbb  


*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

 function result(n){

  let firstHalf = Math.ceil(n/2)
  for(let row = 1; row<firstHalf; row++){
    let str = ''
    for(let rightSpace=row; rightSpace<firstHalf; rightSpace++){
      str+='b'
    }
    for(let star = 1; star<=row; star++){
      str+='*'
    }
    for(let star = 2; star<=row; star++){
      str+='*'
    }
    for(let leftSpace = row; leftSpace<firstHalf; leftSpace++){
      str+='b'
    }
    // for(let bottomLeft = row-1; bottomLeft>=row; bottomLeft--){
    //   str+='b'
    // }
    
   
    console.log(str)
  }

  for(let row = firstHalf; row>=1; row--){
    let str = ''
    for(let rightSpace=row; rightSpace<firstHalf; rightSpace++){
      str+='b'
    }
    for(let star = 1; star<=row; star++){
      str+='*'
    }
    for(let star = 2; star<=row; star++){
      str+='*'
    }
    for(let leftSpace = row; leftSpace<firstHalf; leftSpace++){
      str+='b'
    }
    
   
    console.log(str)
  }

  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
