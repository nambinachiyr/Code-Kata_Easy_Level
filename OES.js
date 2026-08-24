/*
897. Number Square Pattern

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a square pattern using numbers.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number pattern separated with space with the size R.


Explanation:
From the given input R=5, print 5 in 5 times with spaces,
next line print 4 5 5 5 5,and then 3 4 5 5 5,then 2 3 4 5 5
finally print form 1 to 5(R).


Sample Input:
5


Sample Output:


5 5 5 5 5  
4 5 5 5 5  
3 4 5 5 5  
2 3 4 5 5  
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

 function result(n){

   for(let row =n; row>=1; row--){
     let str = ''
     
     for(let j=row; j<=n+row-1; j++){     
      if(j>n){
       if(j===n+row-1){
         str+=n
       }else{
        str+=n+' '
       }
      }else{
        if(j===n+row-1){
         str+=j
       }else{
        str+=j+' '
       }
      }
   }
  
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
