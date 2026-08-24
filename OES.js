/*
887. Half Pyramid Number Pattern-2

Geekoin30
Easy
Topics
Problem Statement:
Write a code to generate a half pyramid number pattern.


Input Description:
Given an even integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern with the size R.


Explanation:
Form the given input R=5, print form 1 to 5, next line print for 4 to 1 and the third line 1 to 3, then fourth line 12 and last line end with 1 always. Alternate rows indicates in reverse the numbers.


Sample Input:
5


Sample Output:


12345  
4321  
123  
21  
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

 function result(n){

  let num = 1
  for(let row = n; row>=1; row--){
    let str = ''
   
   for(let j=1; j<=row; j++){
    if(num % 2!==0){
      str+=j

    }else{
      str+=row+1-j
     
    }
  
   }
   num++
   
    console.log(str)
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
