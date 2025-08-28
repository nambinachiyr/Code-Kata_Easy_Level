


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
 function area_farm(arr){
  let split = arr[0].split(" ")
  let L = split[0]
  let B = split[1]
  let area = (Math.floor(((L*B)*100000))/100000).toFixed(5)
  console.log(area)
 }
area_farm(userInput)
})
// ;Rate 4/5 nearest greater num