/*
143. Equalize String Lengths

Geekoin50
Medium
Topics
Problem Statement:
Given 2 strings S1 and S2,work on the strings such that both string has the same number of characters.To adjust the length reduce number of exceeding characters from longer string.


Sample Input:
guvi
geeks


Sample Output:
guvigeek
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

  function result(str1,str2) {
    let string1 = str1.split('')
    let string2 = str2.split('')
    let string  = []
    if(string1.length<string2.length){
      string = [...string1]
      for(let i = 0;i<string1.length;i++){
       string.push(string2[i])
       string.length++
      }
    }else{
      string = [...string2]
      for(let i = 0;i<string2.length;i++){
        string.unshift(string1[(string2.length-1)-i])
      }
    }
    console.log(string.join(''))
  }

rl.on('close', () => {
const [str1,str2] = userInput[0].split(' ')
// console.log(str1,str2)
 result(str1,str2)
});
