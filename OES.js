/*
183. Vowel Check in Strings

Geekoin40
Medium
Topics
Company
Problem Statement:
Given a number N and an array of N strings,Print yes, if all strings have atleast one vowel in them otherwise print no.


Input Description:
The input consists of an integer N (where N <= 1000), followed by N strings.


Output Description:
The output is "yes" if all N strings contain at least one vowel, and "no" otherwise.


Sample Input:
5
code
overload
vishal
sundar
anish


Sample Output:
yes
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(num,strs) {
  const vowelArr = ['a','e','i','o','u']
  let count = 0
  for(let i=0; i<num; i++){
    let isVowel = false
    for(let j=0; j<strs[i].length; j++){
      if(vowelArr.includes(strs[i][j])){
       isVowel = true
       break
      }
    }if(!isVowel){
      count=0
      break
    }else{
      count+=1
    }
   
  }
  console.log(count===num?"yes":'no')
}

rl.on('close', () => {
  const num = Number(userInput[0])
  const strs = userInput.slice(1,) 
  result(num,strs);
});
