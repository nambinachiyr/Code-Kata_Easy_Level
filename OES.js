


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
  function power2(arr){
    let str = arr[0].split("")
    let count=0;
    // console.log(str)
    for(let i = 0;i<str.length;i++){
      let letter = str[i]
      if(letter==="a" || letter==="e"||letter==="i"||letter==="o"||letter==="u"){
        // console.log("yes") 
        count++;
        break        
      }else {
        // console.log("no")
      }
    }
    if(count){
      console.log("yes")
    }
    else{
      console.log("no")
    }
  }
  power2(userInput)

});