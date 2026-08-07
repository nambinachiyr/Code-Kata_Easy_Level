/*
39. Count String Occurrences

Geekoin30
Easy
Topics
Solved!
Problem Statement:
Given a sentence and string S, find how many times S occurs in the given sentence.If S is not found in the sentence print -1


Input Description:
Input Size : |sentence| <= 1000000(complexity O(n)).


Output Description:
The output is the number of times S occurs in the given sentence, or -1 if S is not found.


Sample Input:
I enjoy doing codekata
codekata


Sample Output:
1


*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

inp.on("close", () => {
  // console.log(userInput) //[ 'code code code', 'learn' ]
  const sentance = userInput[0].split(' ')
   const str = userInput[1].split(' ')
  // console.log(sentance,str)   //[ 'code', 'code', 'code' ] [ 'learn' ]
  const filtered = sentance.filter(s=>s===str[0])
  // console.log(filtered)  //[]
  filtered.length!==0?console.log(filtered.length):console.log(-1)  //-1

  
});