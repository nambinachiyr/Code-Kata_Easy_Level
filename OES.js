/*
945. LCM without GCD

Geekoin80
Hard
Topics
Problem Statement:
Write a program to get a list of integers as input and find the LCM of the values without using GCD


Input Description:
First line contains an integer N, number of values.
Second line contains N space separated values.


Output Description:
Print the LCM of the values.


Explanation:
The LCM of the 1,2,3,4,5 is 60


Sample Input:
1 2 3 4 5


Sample Output:
60

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(a) {
  const max = Math.max(...a)
  let i = max

  while(true){
  //  This Condition will be always true until we found the tracate
    let isLCM = true
   for(let num =0 ;num<a.length;num++){
    // Inside the array search for it's divided the max value
    if(!Number.isInteger(i/a[num])){
      // Check if is divide  is the Number is Integer or not
      // console.log(i/a[num])
      isLCM =false
       break
    }
  }
  if(isLCM){
    break
  }
  i+=max
    // console.log(i,"o")
  }
  console.log(i)
}

rl.on('close', () => {
  const a = userInput[0].split(' ').map(n=>Number(n));
 
  result(a);
});
