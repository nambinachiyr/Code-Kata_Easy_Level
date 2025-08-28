


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
Given a number N followed by N elements which can be arranged in ascending order with maximum one element update. Print the index of the element which has to be changed else print '-1' if the updation not neccassary or if the given input needs more than one update to form ascending order.
Sample Input:
7
1 2 4 3 5 6 8
5
1 10 3 14 5
Sample Output:
2
-1
*/

inp.on("close", () => {
  let length = Number(userInput[0])
  let elements = userInput[1].split(" ")
  let newEle = elements.map((ele,i)=>{
     return Number(ele)
  })
  let count = 0;
  let sort_index = -1
  let index = 0;
  let result = "";
  if(length===newEle.length){
    for(let i = 0;i<length-1;i++){
      if(newEle[i]<newEle[i+1]){
      }else{
        count++;
        index = i
      }
       result = count==1?index:sort_index
    }
  }
  // console.log(sort_index)
  // console.log(count)
  // console.log(index)
  console.log(result)
})
// ;Rate 4/5 nearest greater num