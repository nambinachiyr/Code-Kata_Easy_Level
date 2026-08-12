/*
68. CamelCase Conversion

Geekoin50
Medium
Topics
Problem Statement:
Given a string/sentence print its corresponding camelcase convention.


Input Description:
Input Size : |s| <= 1000000(complexity O(n))


Sample Input:
guvi geeks


Sample Output:
GuviGeeks

*/

const readline = require('readline');
const { once } = require('stream');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(a,word1,word2){
 for(let i = 0 ;i<a.length;i++){
  let word =''
     for(let j = 0;j<a[i].length;j++){
      word = a[i][0].toUpperCase()+a[i].slice(1,)
    }
    // console.log(word)
    a[i] = word
 }
 console.log(a.join(''))
 }

rl.on("close", () => {
  let a = userInput[0].split(' ')  
  let word1 = a[0]
  let word2 = a[1]
  result(a,word1,word2)
});