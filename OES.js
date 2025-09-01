


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
33.
Problem Statement:
Given a number N followed by N elements, find the second smallest element.If it cannot be found then print -1
Input Description:
Input Size : N <= 100000 (ie do it in O(log n) time complexity)
Sample Input:
5
1 2 3 4 5
Sample Output:
2
*/

inp.on("close", () => {
    let length = Number(userInput[0])
    let num = userInput[1].split(" ").map(Number)
    // let min = num[0]
    // let max = num[1]
    // // Thorugh Looping -> Method one
    // for(let i =0; i<length; i++){ 
    //   // console.log(i)     
    //   if(num[i]<min){
    //     max = min
    //     min = num[i]
    //   }
    //   else if(min<num[i] && max>num[i]){
    //     max = num[i]        
    //   }      
    // }max!==min?console.log(max):console.log(-1)
    //got 4/5
    // let sort = num.sort()
    // console.log(sort[1])   
   let unique = [...new Set(num)]
   if(unique.length<2){
    console.log(-1)
   }
   else{
    unique.sort((a,b)=>a-b)
    console.log(unique[1])
   }
  //  nice perfect
})
