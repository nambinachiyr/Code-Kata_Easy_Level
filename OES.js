/*
948. Add Integers without Carry

Geekoin40
Medium
Topics
Problem Statement:
Write a code to get 2 integers as input and add the integers without any carry.


Input Description:
A single line containing 2 integers.


Output Description:
Print sum of the 2 integers without carry


Sample Input:
44 66


Sample Output:
0


Explanation:
44+66 --> 4+6=0 and 4+6=0. 44+66=0.

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
  let n1;
  let n2;
  for(let i=0; i<num.length-1; i++){
  
    let num1 = num[i].split('').map(n=>Number(n))
    let num2 = num[i+1].split('').map(n=>Number(n))
    
    n1 = (num1[i]+num2[i]).toString()
    n2 = (num1[i+1]+num2[i+1]).toString()   
  }
 
  let ar1 = []
  if(n1[1]===undefined){
   ar1.push(n1[0])

  }else{
    if(n1[1]!=='0'){
     ar1.push(n1[1])
    }
  }

    if(n2[1]===undefined){
   ar1.push(n2[0])

  }else{
    ar1.push(n2[1])
  }
  
  console.log(ar1.join(''))


 
}

rl.on('close', () => {
  const num = userInput[0].split(' ');
//  console.log(num)
  result(num);
});
