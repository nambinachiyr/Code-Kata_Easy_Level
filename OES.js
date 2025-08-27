


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  function prime(arr){
    let N = arr[0]
    if(N%2===0 || N%3===0 || N%5===0 ||N%7===0 || N%9===0){
      return 1
    }else return 0
   }prime(userInput)?console.log("no"):console.log("yes")
  
});