/*
41. Common Characters in Strings

Geekoin40
Medium
Topics
Problem Statement:
Given 2 strings,check whether they have any common characters.If found print 'yes' else print 'no'.


Input Description:
Input Size : |s| <= 100000(O(n))


Sample Input:
guvi guvigeeks


Sample Output:
yes


*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

function result(str1,str2){
  let count = 0
  for(let i=0;i<str1.length;i++){    
    for(let j = 0;j<str2.length;j++){
    if(str2[j]===str1[i]){
        count = count + 1;
       str2 = str2.slice(j+1,) //why slice is string concept so start with 1
        if(count===str1.length){
          break
        }
        break
      }else{
        count = 0
        continue;
      }
    }
    if(count === str1.length){
      break;
    }
  }
  
  count===str1.length?console.log("yes"): console.log("no")
}

inp.on("close", () => {
  // console.log(userInput) 
  const arr = userInput[0].split(' ')
  const str1 = arr[0].split('')
  let str2 = arr[1].split('')
  result(str1,str2)
  
});