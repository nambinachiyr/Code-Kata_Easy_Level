/*
Problem Statement:
Given 2 numbers N and K followed by N elements, find the Kth smallest element. If the element cannot be found then print -1


Input Description:
The input consists of two numbers N and K, followed by N elements. N <= 100000.


Output Description:
The output is the Kth smallest element. If the element cannot be found, print -1.


Sample Input:
5 2
1 1 2 4 5


Sample Output:
2



*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data.trim());
});

const result = (arr1,K)=>{
//  k=2 in arr 1 1 1 1 5 => 1,5 so -> -1
/*
for(let i of arr1){

  if(!seqNum.includes(i)){
    seqNum.push(i)
  }  
}
 //console.log(seqNum) //[ 1, 2, 3, 4, 5 ] |  [ 1, 5 ]
seqNum[K-1]?console.log(seqNum[K-1]):console.log(-1) //5 | -1
*/
const uniqueNum = [...new Set(arr1)]
// const uniqueNum = arr1.filter((item,index)=>arr1.indexOf(item)===index)
// console.log(uniqueNum.length,K)
uniqueNum.length>=K?console.log(uniqueNum[K-1]):console.log(-1)

}

inp.on("close", () => {
  const arr1 = userInput[1].split(' ').map(num=>Number(num))
  const position = userInput[0].split(' ').map(num=>Number(num))
  const K = position[1]
  
  
  result(arr1,K)
});