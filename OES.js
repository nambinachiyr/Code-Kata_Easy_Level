/*
56. Find Different Number in Series

Problem Statement:
Given an array of N elements which follows either even number or odd number series.There may exists at maximum 1 even number in the odd series or 1 odd number in the even series.Find the different number if exists otherwise print '-1'?


Input Description:
Input Size : |N| <= 100000


Sample Input:
5
1 3 4 5 7


Sample Output:
4

*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

const difference = (arr1)=>{
  let oddCount = 0
  let evenCount = 0
  let oddIndex = 0
  let evenIndex = 0
  for(let i = 0;i<arr1.length;i++){
    if(arr1[i]%2!==0){
      oddCount++
      (oddCount===1)&&(oddIndex = arr1[i])
    }else{
      evenCount++
      (evenCount===1)&&(evenIndex = arr1[i])
    }
  }
  // If all odd or even elements
  if(oddCount===arr1.length||evenCount===arr1.length){
    return console.log(-1)
  }   
  // One odd number 
  else if(oddCount===1){
    return console.log(oddIndex)
  }
  // One even number
  else if(evenCount===1){
    return console.log(evenIndex)
  }//Mutiple odd or even
  else{
    return console.log(-1)
  }

}

inp.on("close", () => {
  const arr1 = userInput[1].split(' ').map(num=>Number(num))
  
  difference(arr1)
});