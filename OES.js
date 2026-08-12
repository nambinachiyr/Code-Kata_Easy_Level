/*
70. One Character Difference

Geekoin50
Medium
Topics
Problem Statement:
Given 2 strings check whether they differ exacly by one character.If yes then print 'yes' otherwise print 'no'


Input Description:
Input Size : |s| <= 100000(complexity O(nlogn) or O(n))


Sample Input:
codekata codekate


Sample Output:
yes

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(a,word1,word2){
  let count = 0
  for(let i = 0 ;i<word1.length;i++){
    // for(let j = 0;j<word2.length;j++){
      if(word1[i]!==word2[i]){
        // console.log(word1[i],'-',word2[i])
        count++
      }
    // }
  }
  if(count===1){
    console.log("yes")
  }else{
    console.log("no")
  }
 }

rl.on("close", () => {
  let a = userInput[0].split(' ')
  let word1 = a[0].split('')
  let word2 = a[1].split("")
 
  result(a,word1,word2)
});