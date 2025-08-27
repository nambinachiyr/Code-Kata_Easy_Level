


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
  // function between(arr){
  //   let N = Number(arr[0]);
  //   let split = arr[1].split(" ")
  //   let L= Number(split[0])
  //   let R= Number(split[1]);
  //   if(L<=N && N<=R){
  //     console.log("yes")
  //   }else console.log("no")
  // }
  // between(userInput)
  function  between(arr){
    let N = arr[0];
    let[L , R] = arr[1].split(" ").map(Number)
    console.log((L<N && N<R)?"yes":"no")
  }
  between(userInput) 

});