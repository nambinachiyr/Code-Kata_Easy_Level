


const { constants } = require("buffer");
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
Given 2 numbers N,M find the GCD of N and M.If it cannot be found for given number(s) then print -1
Sample Input:
10 5
Sample Output:
5
*/

inp.on("close", () => {
 function GCD(arr){
   const split = arr[0].split(" ")
   const N1 = Number(split[0])
   const M1 = Number(split[1])
   let greater = -1;
   let N = N1<0?-1*N1:N1 
   let M = M1<0?-1*M1:M1 
  //  console.log(N,M)
   N>M?greater=M:greater = N
  //  console.log(greater)
   let greatest_Num = -1
   for(let i=1;i<=greater;i++){
     
    if(N%i===0&&M%i===0){
      // multi==i?multi = i:multi = 0
      greatest_Num = i
    }
    else greatest_Num
  }console.log(greatest_Num)
 }
GCD(userInput)
})
// ;Rate 4/5 nearest greater num