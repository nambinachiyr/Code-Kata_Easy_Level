


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
Given a number N, print its reverse.
Input Description:
Input Size : n <= 1000
Sample Input:
10
Sample Output:
1
*/

inp.on("close", () => {
   let Cut_Zero = Number(userInput[0])
   let reverse_Arr = [];
   while(Cut_Zero>0){
    let sum = 0
     sum = sum*10+Cut_Zero%10;
     Cut_Zero = Math.floor(Cut_Zero/10)
     reverse_Arr.push(sum)
     if(reverse_Arr[0]===0){
      reverse_Arr.pop()
  }
   }
  
  //  console.log(Cut_Zero)
  
   console.log(reverse_Arr.join(""))
})
// ;Rate 4/5 nearest greater num