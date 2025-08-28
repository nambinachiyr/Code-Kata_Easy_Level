


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
 function odd_even_string(arr){
   let str = arr[0].split("")
   let odd = [];
   let even = []
   for(let i = 0;i<str.length;i++){
    if(i%2===0){
      odd.push(str[i])
    }
    else{
      even.push(str[i])
    }
   }
   let join_odd = odd.join("")
   let join_even = even.join("")
   console.log(join_odd, join_even)
 }
odd_even_string(userInput)
})
// ;Rate 4/5 nearest greater num