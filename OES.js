


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
Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
Input Description:
The input consists of two integers, N and K, followed by N integers.
Output Description:
The output is 'yes' if K is found among the N integers, otherwise 'no'.
Sample Input:
4 2
1 2 3 3
Sample Output:
yes
*/

inp.on("close", () => {
    let K = userInput[0].split(" ").map(Number)
    let N = userInput[1].split(" ").map(Number)
    // let count = false
    // for(let i = 0; i<K.length; i++){
    //   for(let j = 0; j<N.length; j++){
    //     if(Number(K[i])===Number(N[j])){
    //       count = true
    //       break
    //     }
    //   }
    // }
    // count?console.log("yes"):console.log("no")

    // 2.Way
     let isthere = false;
     for(let i = 0;i<K.length;i++){
      if(N.includes(K[i])){
        isthere = true;
        // console.log(N,K[i])
        break
      }
     }
     isthere?console.log("yes"):console.log("no")
    
})
// ;Rate 4/5 nearest greater num