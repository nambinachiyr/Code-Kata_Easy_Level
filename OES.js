/*
71. Holiday Check

Geekoin40
Medium
Topics
Problem Statement:
Given a day, print 'yes' if it is a holiday otherwise print'no'.Assume that weekend days are holidays


Sample Input:
saturday
monday


Sample Output:
yes
no



*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(a){
//  console.log(a)
 const weekEndDays = ["saturday","sunday"]
 const weekDays = ["monday","tuesday","wednesday","thursday","friday"]

//  for(let i =0;i<a.length;i++){
//   // console.log(i,' - i')
//   for(let j = 0;j<weekDays.length;j++){
//     // console.log(j,' - j')
//     if(a[i]===weekEndDays[j]){
//       console.log("yes")
//       break
//     }else if(a[i]===weekDays[j]){
//       console.log("no")
//       break
//     }
//   }
//  }
//   Way II
for(let i of a){
  let flex = false
  for(let weekEndDay of weekEndDays){
    for(let weekDay of weekDays){
      if(i.toLowerCase()===weekEndDay){
      console.log("yes")
      flex = true
      break
    }else if(i.toLowerCase()===weekDay){ //or weekDays.include(i.toLowerCase())that alse we can use
      // console.log(i)
       console.log("no")
       flex = true
       break
    }
  }
  if(flex){
    break
  }
  }
}

 }

rl.on("close", () => {
  let a = userInput 
  result(a)
});