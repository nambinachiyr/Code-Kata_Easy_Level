


const { constants } = require("buffer");
const { count } = require("console");
const readline = require("readline");
const { isNumberObject } = require("util/types");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
/*28.
Problem Statement:
Count the number of digits of a given number N.Size of the integer ranges from 1<N<100000000

Sample Input:
548

Sample Output:
3
29.
Problem Statement:
Given a string S, print it without using semicolon in your program.
Sample Input:
hello world
Sample Output:
hello world
30.
Problem Statement:
Given a number N, find the nearest greater multiple of 10.
Input Description:
Input Size : N <= 10000
Sample Input:
3
Sample Output:
10
31.
Problem Statement:
Given 2 numbers N,M. Find their difference and check whether it is even or odd.
Sample Input:
5 5
Sample Output:
even
32.
Problem Statement:
Write a program to print the sum of the first K natural numbers.
Input Description:
Input Size : n <= 100000
Sample Input:
3
Sample Output:
6
*/

inp.on("close", () => {
    // 28
    // let num = userInput[0].split("")
    // console.log(num.length)
    // 29
    // let num = userInput[0]
    // console.log(num)
    // 30
    // let user = Number(userInput[0])
    // let multi = user%10
    // let com = 10-multi
    // let num = user+com
    // console.log(num)
    // console.log(multi)
    // 31.
    // let nums = userInput[0].split(" ").map(Number)
    // let firstNum = nums[0]
    // let secondNum = nums[1]
    // let diff = firstNum-secondNum;
    // let difNum = diff<0?-1*diff:diff
    // console.log(difNum%2===0?"even":"odd")
    // 32.
    // let user = Number(userInput[0])
    // let naturalNum = (user*(user+1))/2 //n(n+1)/2
    // console.log(naturalNum)
    
})
// ;Rate 4/5 nearest greater num