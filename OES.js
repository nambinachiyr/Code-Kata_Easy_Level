/*
64. Reverse Words Except Ends
Problem Statement:
Given a string S consisting of a sentence, the task is to reverse every word of the sentence except the first and last character of the words.


Input Description:
The input consists of a string S representing a sentence.


Output Description:
The output is the modified string with every word reversed except its first and last characters.


Sample Input:
guvi coding platform


Sample Output:
gvui cnidog proftalm.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(arr){

  let count = 0
  let test = []
  for (let i = 0 ; i<arr.length;i++){
    let changedWord = ''
    let letters = arr[i].split('')
    for(let l = 0;l<letters.length/2;l++){
       let FirstLetter = letters[0]
       let LastLetter = letters[letters.length-1]
       if(letters[l]!==FirstLetter && letters[l]!==LastLetter){
           let temp = letters[l]
           letters[l] = letters[letters.length-(l+1)]
          //  console.log(letters.length-(l+1))
           letters[letters.length-(l+1)] = temp
          }
          // changedWord = FirstLetter+letters[l]+LastLetter
    }
    arr[i] = letters.join('')
    // console.log(arr[i])
  }
console.log(arr.join(' '))
  }


rl.on("close", () => {
  let arr = userInput[0].split(' ')
  // console.log(arr) 
  result(arr)
});