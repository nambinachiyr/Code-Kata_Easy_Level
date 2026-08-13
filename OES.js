/*
81. Collinearity of Three Points

Geekoin40
Medium
Topics
Problem Statement:
Given 3 points check whether they lie on the same line.If they lie on the same line print 'yes' Otherwise print 'no'.


Sample Input:
0 1
0 0
0 2


Sample Output:
yes
*/

const { match } = require('assert');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(vectors,x1,x2,x3,y1,y2,y3){

  if(x1===x2){
    if(x1===x2){
     console.log("yes")
    }
  }
  else{
    let crossProduct = (y2-y1)*(x3-x2)-(y3-y2)*(x2-x1)
     if(crossProduct===0){
      console.log("yes")
     }else{
      console.log("no")
     }
  }


 }

rl.on("close", () => {
  const vectors = userInput
  const [x1,y1] = userInput[0].split(' ').map(n=>Number(n))
  const [x2,y2] = userInput[1].split(' ').map(n=>Number(n))
  const [x3,y3] = userInput[2].split(' ').map(n=>Number(n))
  result(vectors,x1,x2,x3,y1,y2,y3)
});