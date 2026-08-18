/*
160. Reachable Point

Geekoin40
Medium
Topics
Problem Statement:
Given 2 numbers n and m, n pairs of numbers a and b are given. In each pair 'a' means a person can start moving from point 'a' in the x axis to point 'b'(he can visit any point in between). Find if he can visit point m.


Sample Input:
3 5
0 2
2 4
3 5


Sample Output:
yes
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});


 function result(n,m,pairs){
   let isBetween = false
   for(let i=0;i<n;i++){
     p = pairs[i].split(' ').map(n=>Number(n))
    //  console.log(p,"p")
      for(let j = 0;j<1;j++){
        // console.log(p[j],p[j+1])
         if(p[j]<=m && m<=p[j+1]){
          isBetween = true
         }else{
          // console.log("no")
          isBetween = false
         }
      }
    }
    console.log(isBetween?"yes":"no")
   
 }
  

rl.on('close', () => {  
  const [n,m] = userInput[0].split(' ').map(n=>Number(n))
  const pairs = userInput.slice(1)
  
 
result(n,m,pairs)
});
