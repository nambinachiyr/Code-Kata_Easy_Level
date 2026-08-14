/*
91. Parentheses Balancing

Geekoin50
Medium
Topics
Problem Statement:
Given a string S consisting of only '(' and ')', print 'yes' if it is balanced otherwise print 'no'.


Sample Input:
(())


Sample Output:
yes

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(symbol){
  // let balanced = false
  // for(let i = 0 ;i<symbol.length/2; i++){
  //   if(symbol[i]==='(' && symbol[(symbol.length-1)-i]===')'){
  //     //  console.log(i,symbol[i],symbol[(symbol.length-1)-i],(symbol.length-1)-i)
  //      balanced = true
  //    }else{
  //     balanced = false
  //     break;
  //    }
  // }
  // console.log(balanced?"yes":"no")


  // This is is 5/5
  let leftCurve = 0
  let rightCurve = 0
  for(let i = 0 ;i<symbol.length ;i++){
    if(symbol[i]==="("){
      leftCurve++
    }else if (symbol[i]===")"){
      rightCurve++
    }else{
      break
    }
  }
  console.log(leftCurve===rightCurve?"yes":"no")
  // console.log(rightCurve)
}

rl.on("close", () => {
const symbol = userInput[0].split('')
// console.log(symbol)  
  
  result(symbol)
});