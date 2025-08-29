


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
Find the minimum among 10 numbers.
Input Description:
The input consists of 10 space-separated integers.
Output Description:
The output is the minimum of the given 10 integers.
Sample Input:
5 4 3 2 1 7 6 10 8 9
Sample Output:
1
*/

inp.on("close", () => {
 let arr = userInput[0].split(" ")
 let temp = 0;
 let sortArr = []
 for(let i = 0;i<arr.length;i++){
  let maxNum = Number(arr[i+1])
  let minNum = Number(arr[i])
  if(maxNum<minNum||maxNum===minNum){
    temp = maxNum
    sortArr.push(temp)
  }
}
console.log(sortArr)
let sortedArr = sortArr.sort()
console.log(sortedArr[0])
 
})
// ;Rate 4/5 nearest greater num