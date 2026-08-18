/*
154. String Deletion

Geekoin40
Medium
Topics
Problem Statement:
Given 2 strings S,X. Print the string after deleting X.If X not found print the same string.


Input Description:
Input Size : 1 <= |s|, |x| <= 1000


Sample Input:
Happy Birthday
Happy


Sample Output:
Birthday
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});


 function result(strs,str){
//  2/5
  //  const replacedStr = strs.split(str).join('').replace(str,'')
  //  console.log(replacedStr!==''?replacedStr:strs.join(' '))
   
   // This mothed 3/5 but no good why they want delete the substing
  // for(let i = 0 ;i<strs.length-1;i++){


  //   if(strs[i]===str){
  //     let temp = strs[i]
  //     strs[i] = strs[i+1]
  //     strs[(strs.length-1)] = temp
  //     strs.length--
      
  //   }
  // }
  // console.log(strs)

  // This is easy way but 4/5
  const filter = strs.filter(s=>s!==str)
  console.log(filter.join(''))
 }
  

rl.on('close', () => {  
  const str = userInput[1]
  const strs = userInput[0].split(str) //in relpace dont split
  

result(strs,str)
});
