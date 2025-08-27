


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // This Logic is fine but notgood
  // function grePower(arr){
  //   let N = Number(arr[0])
  //   let power = Math.floor(Math.log2(N))
  //   let result = 2**power
  //   let num = N;
  //   console.log(power)
  //   if(result===num){
  //     console.log("yes")
  //     return 2**(power+1)
  //   }else console.log("This is not a list of 2 powers")
  //  }console.log(grePower(userInput))
  
  function power2(arr){
    let N = Number(arr[0]);
   if((N&(N-1))===0){
    return N*2
   }
   else{
    let power = Math.ceil(Math.log2(N))
  //  console.log(2**power)
   return 2**power
   }
  }
  console.log(power2(userInput))

});