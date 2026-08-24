/*
899. Hollow Rhombus Pattern-2

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate an hollow rhombus Pattern using stars.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the solid rhombus using stars with the size R.


Sample Input:
4


Sample Output:


   ****  
  *  *  
 *  *  
****  

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
     
     for(let space = 1;space<=n-row;space++){
      str+=' '
     }

     for(let j=1; j<=n; j++){     
     if(row===1 || row===n || j===1 || j===n){
       str+='*'
     }else{
      str+=' '
     }
   }
  
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
