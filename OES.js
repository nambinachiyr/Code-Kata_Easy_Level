


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
Given a number N, print the product of the digits.
Input Description:
Input Size : N <= 100000000000
Sample Input:
2143
Sample Output:
24
*/

inp.on("close", () => {
  let user = userInput[0].split("")
  function product(user){
    let sum = 1
    for(let i = 0; i<user.length; i++){
     sum = Number(user[i])*sum;
      // console.log(sum)
    }
    console.log(sum)
  }
  product(user)
})
// ;Rate 4/5 nearest greater num