/*
38. Character Count in String

Geekoin50
Medium
Topics
Problem Statement:
Given a string 'S' and a character 'K', find how many times 'K' got repeated in 'S'.If 'K' is not found in 'S' print -1


Input Description:
The input consists of a string 'S' and a character 'K'. The size of string 'S' is at most 100000.


Output Description:
The output is the count of character 'K' in string 'S'. If 'K' is not found, print -1.


Sample Input:
codekata a


Sample Output:
2

*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

function result(string,letter){
  let count = 0;
    for(let s in string){
      // console.log(letter)
      if(string[s]===letter){
        count = count+1
      }
    }
    count!=0?console.log(count):console.log(-1)
}

inp.on("close", () => {
  // console.log(userInput) 
  const arr = userInput[0].split(' ')
  const string = arr[0]
  const letter = arr[1]
  // console.log(string,"S")
  // console.log(letter,"L") 
  result(string,letter)
  
});