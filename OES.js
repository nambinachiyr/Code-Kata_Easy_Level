/*
109. Integer or Long

Geekoin50
Medium
Topics
Problem Statement:
Given a number N, print 'INT' if it is integer range or print 'LONG' if it is greater.


Input Description:
Input Size : 1 <= N <= 100000


Sample Input:
999


Sample Output:
INT

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(n){
 const int = 100000
 if(100000>n){
  console.log("INT")
 }else{
  console.log("LONG")
 }
}
rl.on("close", () => {
 const n = Number(userInput[0])

 result(n)
});