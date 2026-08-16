/*
104. Rectangle with Integer Sides

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers P and A which are the perimeter and area of a rectangle respectively, find if there can actually be a rectangle with this perimeter and area having integer sides.If there exists such rectangle print 'yes' otherwise print 'no'.


Input Description:
Input Size : 1 <= P,A <= 100000


Output Description:
The output is 'yes' if such a rectangle exists, otherwise 'no'.


Sample Input:
20 25


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

function result(P,A){
  let isTrue = false
 for(let i = 0;i<P;i++){
  if(A%i===0){
    let l = i
    let b = A/i
    // Area ku formula Area = l*b //inside the rectangle
    if(2*(l+b)===P){     //Perimeter = 2*(l+b) //outside sides 
      // console.log(l,b)
      isTrue = true
    }
  }
}
console.log(isTrue?"yes":"no")
 }



rl.on("close", () => {
 const [P,A] = userInput[0].split(' ').map(n=>Number(n))

 result(P,A)
});