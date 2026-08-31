/*
182. First 1's Position in Binary Product

Geekoin50
Medium
Topics
Company
Problem Statement:
Print the position of first 1 from left to right, in binary representation of product of 2 integers after the first one.


Sample Input:
18 2


Sample Output:
4
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(num) {
  const mul = num.reduce((acc,cur)=>acc*cur,1)
  const binaryNum = mul.toString(2)

  let count = 0
  if(binaryNum==='0'){
    console.log(0)
  }else{
    for(let i=0; i<binaryNum.length; i++){
    if(binaryNum[i]==='1'){
      count+=1
    }
    if(count===2){
      console.log(i+1)
      break
    }
    // console.log(binaryNum[i])
  }
  }
}

rl.on('close', () => {
  const num = userInput[0].split(' ').map(n=>Number(n))
  result(num);
});
