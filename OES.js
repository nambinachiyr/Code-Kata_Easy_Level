


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
 function oddNum(arr){
  let num = arr[0].split("")
  let odds = []
  for(let i = 0;i<num.length;i++){
    if(num[i]%2!==0){
      odds.push(num[i])
    }
  }
  odds.length>0?console.log(odds.join(" ")):console.log("-1")
 }
oddNum(userInput)
})
// ;Rate 4/5 nearest greater num