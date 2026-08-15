/*
103. Substring Check-2

Geekoin40
Medium
Topics
Problem Statement:
Given 2 strings.check if the second string is a substring of the first string.Print 'yes' if there exists a valid substring otherwise print 'no'.


Input Description:
The input consists of two strings. The size of the strings (N) is between 1 and 100000 (inclusive).


Output Description:
Print 'yes' if the second string is a substring of the first string, otherwise print 'no'.


Sample Input:
codekata code


Sample Output:
yes


*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(str1,str2){
//  console.log(str1,str2)

// this logic is for only find the present charactar no substring
  // let isthere = false
  // for(let i = 0;i<str1.length;i++){
  //   for(let j = 0;j<str2.length;j++){
  //     if(str1[i]===str2[j]){
  //       // console.log("yes",str1[i],j,i)
  //       isthere = true
  //     }else{
  //       isthere = false
  //     }

  //   }
  // }

  // console.log(isthere?"yes":"no")

  for(let i = 0;i<str1.length;i++){
    let count = true
    for(let j = 0;j<=str2.length;j++){
      if(str1[i+j]!==str2[j]){
         count = false
         break
      }
    }
    if(count){
      console.log("yes")
      return
    }
  }
  console.log("no")
  
  
}


rl.on("close", () => {
 const str = userInput[0].split(' ')
 const str1 = str[0].split('')
 const str2 = str[1].split('')
 result(str1,str2)
});