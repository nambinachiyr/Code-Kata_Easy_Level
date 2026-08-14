/*
90. String Difference Check

Geekoin50
Medium
Topics
Problem Statement:
Given 2 strings and a number K, check whether they differ exactly by K characters.


Input Description:
Input Size : |s| <= 100000(complexity O(nlogn) or O(n))


Sample Input:
codekata codeguvi 4


Sample Output:
yes

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
  userInput.push(data.trim());
});

function result(k,str1,str2){
  
  let count = 0
  for(let i = 0;i<str1.length;i++){
    for(let j = i;j<str2.length;j++){
      if(str1[i] !== str2[j]){
        count++
        break;
      }else{
        // count--
        break
      }
    }
  }
  console.log(count!==k?"no":"yes")

  // WE acn do the same problem using one loop
}

rl.on("close", () => {
//  console.log(userInput)
  const arr = userInput[0].split(' ')
  const str1 = arr[0]
  const str2 = arr[1]
  const k = Number(arr[2])
  
  
  result(k,str1,str2)
});