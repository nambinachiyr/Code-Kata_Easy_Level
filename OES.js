


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
Given 3 numbers A,B,C find the sum of Arithmetic Series with a=A, d=B and n=C
Sample Input:
1 1 2
Sample Output:
3
*/

inp.on("close", () => {
  let user = userInput[0].split(" ")
  function arithmeticSum(user){
    let a = Number(user[0])
    let d = Number(user[1])
    let n = Number(user[2])
    let sum = n/2*(2*a+(n-1)*d)
    console.log(sum)
  }
  arithmeticSum(user)
})
// ;Rate 4/5 nearest greater num