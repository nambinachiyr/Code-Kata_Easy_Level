


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
  let num = Number(arr[0])
  // let compositeNum = 0 find composite num
  let factorNum = [];
  // for(let i = 2;i<=num;i++)
  for(let i = 1;i<=num;i++){
    if(num%i===0){
      // compositeNum = compositeNum+1;
     factorNum.push(i)
    }
  }
  // return  compositeNum>2?"yes":"no"
  return factorNum.join(" ")
 }
console.log( factor(userInput))
})
// ;Rate 4/5 nearest greater num