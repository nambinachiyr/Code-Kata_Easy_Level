


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
/*
Problem Statement:
Write a program to calculate the total surface area and volume of cuboid.
Input Description:
Input contains three space separated positive integers L, B, H denoting the length, width and height of cuboid respectively.
Output Description:
The output should be the total surface area and volume of the cuboid, separated by a space.
Sample Input:
1 2 3
Sample Output:
22 6
*/

inp.on("close", () => {
  let arr1 = userInput[0].split(" ")
   let l = arr1[0]
   let b = arr1[1]
   let h = arr1[2]
 function surface_Area(l,b,h){
   let area = 2*(l*b+b*h+h*l)
   return (area)   
 }
 function volume_of_cuboid(l,b,h){
   let volume = l*b*h
   return (volume)
 }

console.log(surface_Area(l,b,h), volume_of_cuboid(l,b,h))
})
// ;Rate 4/5 nearest greater num