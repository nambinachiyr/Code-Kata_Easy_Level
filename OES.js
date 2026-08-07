/*
37. First Occurrence of Character

Geekoin50
Medium
Topics
Problem Statement:
Given a string 'S' and a character 'K', find at what position the character 'K' occurs for the first time in 'S'.(Assume the index of string starts at 1).If the character is not found in 'S' then print -1


Input Description:
Input Size : |s| <= 100000


Sample Input:
codekata a


Sample Output:
6

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
    for(let s in string){
      // console.log(letter)
      if(string[s]===letter){
        return console.log(Number(s)+1)
        break;
      }
    }
    console.log(-1)
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