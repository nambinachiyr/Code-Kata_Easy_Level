/*
146. Longest Word in a Sentence

Geekoin50
Medium
Topics
Problem Statement:
Find the word having maximum length in a given sentence and print it. If two words are of same length return the first occuring word of max-length.


Input Description:
The input consists of a sentence where its size |s| is less than or equal to 100000.


Output Description:
The output is the word with the maximum length.


Sample Input:
guvi geek


Sample Output:
guvi

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
    let longWord;
    let pre= str[0]
    for(let i = 0;i<str.length-1;i++){
      for(let j=i+1;j<str.length;j++){
        if(str[i].length<str[j].length){
       longWord = str[j]
      }else if(str[i].length>str[j].length){
        longWord = str[i]
      }else{
        longWord = str[i]
      }

      }
      if(pre.length>longWord.length){
       longWord = pre
      }else{
        pre = longWord
      }
    }
    console.log(longWord)

  }

rl.on('close', () => {
const str = userInput[0].split(' ')
result(str)
});
