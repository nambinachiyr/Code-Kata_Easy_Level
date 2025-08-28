


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

inp.on("close", () => {
 function perfectSquare(arr){
  let num = (arr[0].split(" "))
  let firstSquare = Number(num[0]);
  let secondSquare = Number(num[1]);
  let product = firstSquare*secondSquare;
  let sqrt = Math.round(Math.sqrt(product))
  // Number.isInteger(sqrt)?console.log(sqrt*sqrt):console.log(sqrt*sqrt)
  // console.log(sqrt)
  // console.log(firstSquare*secondSquare)
  return (sqrt*sqrt===product?console.log("yes"):console.log("no"));
  // console.log(result)
 }
perfectSquare(userInput)
})
// ;Rate 4/5 nearest greater num