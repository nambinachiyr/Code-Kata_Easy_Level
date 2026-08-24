/*
900. Hollow Diamond Pattern

Geekoin60
Medium
Topics
Problem Statement:
Write a code to generate the hollow diamond inscribed in a rectangle using stars.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the hollow diamond in a rectangle using stars with the size R.


Sample Input:
5


Sample Output:


**********  
****  ****  
***    ***  
**      **  
*        *  
*        *  
**      **  
***    ***  
****  ****  
**********  

Explanation:
From the given input R=5, Print the R*2 rows of hollow diamond in a rectangle using stars.

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

   for(let row =1; row<=n; row++){
     let str = ''
     
     //  Top
     for(let leftSide=row; leftSide<=n; leftSide++){     
       str+='*'
      }
     for(let space =2;space<=row+row-1;space++){
      str+=' '
     }
     for(let rightSide=row;rightSide<=n;rightSide++){
      str+='*'
     }
    console.log(str)

    //  Bottom
  }  
  for(let row=1;row<=n;row++){
    let str=''
    for(let leftSide=1; leftSide<=row; leftSide++){     
   str+='*'
 }
 for(let space =row*2;space<=n*2-1;space++){
  str+=' '
 }
 for(let rightSide=1;rightSide<=row;rightSide++){
  str+='*'
 }   
console.log(str)
  }
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
