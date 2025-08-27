


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
 function strMid(arr){
  let str = arr[0].split("")
  let length  = str.length/2
  if(Number.isInteger(length)){
    str[length-1] = "*";
    str[length] = "*"
  }else 
  {
    let float = Math.floor(length)
   str[float] = "*" 
  } 
  console.log(str.join(""))
 }
 strMid(userInput)
})
// ;Rate 4/5 nearest greater num