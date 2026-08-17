/*
136. Word Position in String

Geekoin50
Medium
Topics
Problem Statement:
Given 2 strings S and X print the word position of X in S.(word count starts from 1).If the given word doesn't exists in S print '-1'.


Input Description:
The input consists of 2 strings S and X. The size of S and X are between 1 and 1000 characters (1 <= |s|, |x| <= 1000).


Output Description:
The output is the word position of X in S (starting from 1), or -1 if X is not found.


Sample Input:
codekata coding challenge
coding


Sample Output:
2
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(string,word) {
  let isWord = false
  let index;
  for(let j=0;j<string.length;j++){
    let count =1
    for(let i = 0 ;i<string[j].length;i++){
      if(string[j][i]===word[i]){
        isWord = true
        index = j
        // console.log(count,string[j].length)
        if(count===string[j].length){
          break
        }
        count++
        
      }
      else{
        isWord = false
        count=0
        break
      }
    }
    if(count!==string[j] && !isWord){

    }else{
      break
    }
  }
  console.log(isWord?index+1:-1)
}

rl.on('close', () => {
 const string = userInput[0].split(' ')
 const word = userInput[1].split('')
 result(string,word)
});
