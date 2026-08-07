/*
36. Case-Sensitive String Equality

Geekoin40
Medium
Topics
Problem Statement:
Given 2 strings S1 and s2, check whether they are case senitively equal without using any predefined function(case sensitive).If they are not same print 'no'


Sample Input:
guvi guvi


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

const result = (str1,str2)=>{
  let count = 0
for(let i of str1){
  for(let j of str2){
    if(i===j){
      count = count + 1
    }

  }
}
str1.length===str2.length&&count===str1.length?console.log("yes"):console.log("no")
  
// console.log(str1,str2)

}

inp.on("close", () => {
  // console.log(userInput)
  const arr = userInput[0].split(' ')
 const str1 = arr[0].split('')
 const str2 = arr[1].split('')
  
  
  result(str1,str2)
});