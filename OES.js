/*
886. IPL Dance Program Seating

Geekoin40
Medium
Topics
Problem Statement:
In the IPL season's valedictory function the organizers have organized for a dance program. The dance has to be performed by men along with the points of the diagonals of the square of side 'n' and the females along with points of the borders. The remaining positions are filled by children. You have to determine their respective positions by writing a program.


Input Description:
Given an integer N indicates representing the matrix (N*N).Where 1<=R<=100


Output Description:
Print the N*N character matrix with the character F(Female), M(Male), C(Children).


Explanation:
From the given input N=7, M can fill the diagonals of left and right.F fill with of the borders.Remaining positions are filled by Children C.


Sample Input:
7


Sample Output:


M F F F F F M  
F M C C C M F  
F C M C M C F  
F C C M C C F  
F C M C M C F  
F M C C C M F  
M F F F F F M  

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

rl.on('line', (data) => {
  userInput.push(data.trim());
});

 function result(n){

  for(let row = 0; row<n; row++){
    let str = ''
   for(let j = 0;j<n;j++){
    // console.log(n-j===(row-1),row-1)
    if(row===j || row+j===n-1){
      str+="M "
     }
    else if(row===0 || row===n-1 || j===n-1 || j===0){
      str+='F '
      // console.log((row!==n-1 && j===n-1),j,row)
     }
     
     else{
      str+='C '
     }
    
   }
    console.log(str.trim())
  }  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
