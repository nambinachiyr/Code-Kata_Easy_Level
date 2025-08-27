


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
  let n = Number(userInput[0])
  let num = Number.isInteger(n)?n+1:Math.ceil(n)
  console.log(num)
// });Rate 4/5 nearest greater num