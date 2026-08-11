/*
65. Roman Numeral to Integer Conversion

Geekoin60
Medium
Topics
Company
Problem Statement:
Given a roman numeral N, convert it into integer.Take L=50, C=100.If it is not a valid roman numeral print '-1'


Input Description:
Input Size : N <= 100


Sample Input:
VI
Y


Sample Output:
6
-1
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(RomanNums){
  let inputs = {
    'I':1,
    "V":5,
    "X":10,
    "L":50,
    "C":100
  }
  let resultArr = []
  for(let i = 0;i<RomanNums.length;i++){
    let re = 0
    let correct
    let str = RomanNums[i]
    // console.log(str)
    for(let r = 0;r<str.length;r++){
      let r1 = 0;
      let srt = str[r].toUpperCase() 
      // console.log(srt)
       r1 =inputs[srt]
       re  = re+r1
        correct = re>=1?re:-1
      }
      console.log(correct)
      resultArr.push(correct)
    }
  // console.log(resultArr.join(' '))

 }

rl.on("close", () => {
  let RomanNums = userInput
  
  // console.log(N1,N2) 
  result(RomanNums)
});