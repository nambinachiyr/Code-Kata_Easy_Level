/*
107. Triangle Interior Angles Check

Geekoin50
Medium
Topics
Problem Statement:
Given 3 angles A,B,C find if they can be interior angles of a triangle.If they form an interior triangle for the given angle,print 'yes' otherwise print 'no'.


Input Description:
The input consists of three integers A, B, and C, representing the angles. The constraints for the angles are 0 <= A,B,C <= 180.


Output Description:
The output should be 'yes' if the given angles can form an interior triangle, and 'no' otherwise.


Sample Input:
2 2 176


Sample Output:
yes

*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(A,B,C){
//  This is Interior Triangle kku oru Major Role ithutha..
// # 3 angles = 180deg
if(A!==0 && B!==0&& C!==0){
  if(A+B+C===180){
  console.log("yes")
} else{
  console.log("no")
}
 }else{
  console.log("no")
 }
}



rl.on("close", () => {
 const [A,B,C] = userInput[0].split(' ').map(n=>Number(n))


 result(A,B,C)
});