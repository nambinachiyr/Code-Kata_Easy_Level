/*
78. Anagram Count for kabali

Geekoin40
Medium
Topics
Problem Statement:
Given a number N and an array of N strings, find the number of strings that are an anagram of 'kabali'.If there exists no anagram for the given string print '0'.


Input Description:
The input consists of an integer N, representing the number of strings, followed by N strings.
Constraints: 1 <= N <= 1000


Output Description:
The output is a single integer representing the count of strings that are an anagram of 'kabali', or '0' if no such anagram exists.


Sample Input:
5
kabali
kaabli
kababa
kab
kabail


Sample Output:
3
*/

const { match } = require('assert');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(strs,n){

  function anagaramStr(str1,str2){
    if(str1.length!==str2.length){
      return false
    }
    let a = str1.split('').sort().join(' ')
    let b = str2.split("").sort().join(" ")
    return a===b
  }
  let count=0
 for(let i = 0;i<=n-1;i++){
   for(let j = i+1;j<n;j++ ){
    if(anagaramStr(strs[i],strs[j])){
      count++
    }
   }
 }
 console.log(count)
 }

rl.on("close", () => {
  const n = Number(userInput[0])
  let strs = userInput.slice(1,)
  result(strs,n)
});