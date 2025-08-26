


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let sum,N,M;
  const newArr = userInput[0].split(" ")
 
    N = Number(newArr[0]);
    M = Number(newArr[1]);
    sum = N+M;
    sum%2 === 0 ? console.log("even"):console.log("odd")
  
   
});