


const { constants } = require("buffer");
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 function factor(arr){
  let num = Number(arr[0])%13==0?"yes":"no"
  return num  
 }
console.log( factor(userInput))
})
// ;Rate 4/5 nearest greater num