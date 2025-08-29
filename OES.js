


const { constants } = require("buffer");
const { count } = require("console");
const readline = require("readline");
const { isNumberObject } = require("util/types");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
/*
Problem Statement:
Given 3 numbers a,b,c print a*b mod c.
Sample Input:
5 3 2
Sample Output:
1
*/

inp.on("close", () => {
  let user = userInput[0].split(" ")
  let a = Number(user[0])
  let b = Number(user[1])
  let c = Number(user[2])
  function mod(a,b,c){
    let ab = a*b;
    if(c!==0){
      let remains = ab%c
      console.log(remains)
    }
  }
  mod(a,b,c)
})
// ;Rate 4/5 nearest greater num