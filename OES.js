/*
145. Reverse String with Separator

Geekoin40
Medium
Topics
Problem Statement:
Given a input string S, reverse the given string by appending each character of the string with '-'.


Input Description:
Input Size : |S| <= 100000


Sample Input:
codekata


Sample Output:
a-t-a-k-e-d-o-c
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(str) {
  let reverseStr = []
  // This is One Case
  // for(let i = str.length-1;i>=0;i--){
  //   if(i===0){
  //       reverseStr = reverseStr+str[i]
  //   }else{
  //     reverseStr = reverseStr+str[i]+'-'
  //   }
  // }

  for(let i = str.length-1;i>=0;i--){
    if(str[i]!==' '){
      reverseStr.push(str[i])
    }
  }
  console.log(reverseStr.join('-'))
  }

rl.on('close', () => {
const str = userInput[0]
result(str)
});
