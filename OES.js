


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  function power2(arr){
    let str = arr[0].split("").reverse().join("")
    if(str===arr[0]){
      console.log("yes")
    }else console.log("no")
  }
  power2(userInput)

});