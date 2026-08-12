/*
74. Reverse String After Removing Vowels

Geekoin40
Medium
Topics
Problem Statement:
Given a string S, print the reverse of the string after removing the vowels.If the resulting string is empty print '-1'.


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
codekata


Sample Output:
tkdc
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(str){
  let withOutVowel = ''
  const vowel = ['a','e','i','o','u']
  for(let i of str.reverse()){
    if(!vowel.includes(i.toLowerCase())){
       withOutVowel = withOutVowel+ i
    }
    // console.log(withOutVowel)
  }
  console.log(withOutVowel.length===0?-1:withOutVowel)
 }

rl.on("close", () => {
  let str = userInput[0].split("")
  
  result(str)
});