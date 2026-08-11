/*
66. Isomorphic Strings

Geekoin50
Medium
Topics
Problem Statement:
Given 2 strings,check whether it is isomorphic.If it is not isomorphic print '-1'.


Input Description:
The input consists of two strings. The size of each string |s| is at most 100000.


Output Description:
The output is 'yes' if the strings are isomorphic, otherwise '-1'.


Sample Input:
aab xxy


Sample Output:
yes

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

function result(str1,str2){
  
    function getPattern(str){
      let test = []
      let count = 0
      for(let s = 0;s<str.length;s++){
        let first = str[0]
        if(first===str[s]){
          count = 1
          test.push(count)
        }
        else{
          count=count+1
          test.push(count)
        }

      }
      return test
    } 
    // console.log(getPattern(str1))    
    // console.log(getPattern(str2))    
 console.log(getPattern(str1).join(' ')===getPattern(str2).join(' ')?"yes":"no")
 
  
 }

rl.on("close", () => {
  let a = userInput[0].split(" ")
  const str1 = a[0]
  const str2 = a[1]
  result(str1,str2)
});