/*
917. Number Half Pyramid Pattern-9

Geekoin50
Medium
Topics
Problem Statement:
Write a code to generate a number half pyramid pattern.


Input Description:
Given an integer R indicates number of rows.Where 1<=R<=100


Output Description:
Print the number half pyramid pattern based on the given integer R.


Explanation:
Form the input R=5, print 1 to R in first column (vertical) and print from the upwards 6 to 9 and print downwards 10 to 12 and upwards from 13 and 14, finally print 15.


Sample Input:
5


Sample Output:


1  
2 9  
3 8 10  
4 7 11 14  
5 6 12 13 15  
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

function result(n) {

  let num = 1

  // This is for create Matrix in Array
  let str = Array.from({length:n},()=>[])

  // We create Column Based array
  for(let col=0; col<=n-1; col++){
    if(col % 2 === 0){
      for(let row=col; row<=n-1; row++){
        str[row][col] = num //[[1],[2],[3],[4],[5],[6]]
        num=num+1
      }
    }else{
      for(let row=n-1;row>=col;row--){
        str[row][col] = num //[[1],[2,9]....]
        num=num+1
      }
    }
    // console.log(str)
  }

/* 
[ 
[ 1 ], 
[ 2, 9 ],
[ 3, 8, 10 ],
[ 4, 7, 11, 14 ],
[ 5, 6, 12, 13, 15 ]
 ]
*/
  // console.log(str)
  for(let i = 0; i<str.length;i++){
    console.log(str[i].join(' '))
  }
}

rl.on('close', () => {
  const n = Number(userInput[0]);

  result(n);
});
