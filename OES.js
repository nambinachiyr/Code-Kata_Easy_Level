/*
882. Alphabet Pattern

Geekoin50
Medium
Topics
Problem Statement:
Generate the aplhabet pattern using nested loops.


Input Description:
Input consists of a string S.where length of the string (S) Where 2<=R<=100


Output Description:
Print the alphabet pattern from the given input string S.


Sample Input:
abcdef


Sample Output:


abcdef  
b    e  
c    d  
d    c  
e    b  
fedcba  

Explanation:
Form the given input string S=abcdef. 6 is the length of string so that print the alphabet pattern of 6 rows.



*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

 function result(word){
  
   for(let row = 0;row<word.length;row++){
    let str = ''
     
      for(let j = 0;j<=word.length-1;j++){
        if(j===0  || row===0 ){
          str+=word[j+row]
        } 
        else if(row===word.length-1){         
          str+=''       
        }else{
          if(j===word.length-1){
            str+=word[j-row]
          }else{

            str+=' '
          }
        }
       
      }
      
      for(let rightSide=(word.length-1);rightSide>0;rightSide--){
       if( row===word.length-1){
         str+=word[rightSide-1]
       }
      }
      console.log(str)
  }
  }
 

rl.on('close', () => {  

  const word = userInput[0].split('')
 
  result(word)

});
