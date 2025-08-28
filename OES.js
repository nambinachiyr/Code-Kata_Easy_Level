


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
 function differnce(arr){
  let teams = arr[0].split(" ")
  let kabali_Num = Number(teams[0])
  let opponent_Num = Number(teams[1])
  let differnce_of_teams = kabali_Num-opponent_Num
  let result;
  differnce_of_teams<0?result=-1*differnce_of_teams:result=differnce_of_teams;
  console.log(result)
 }
differnce(userInput)
})
// ;Rate 4/5 nearest greater num