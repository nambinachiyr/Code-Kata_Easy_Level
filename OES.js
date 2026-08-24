/*
884. Star and b Pattern

Geekoin40
Medium
Topics
Problem Statement:
write a code to generate the following pattern.


Input Description:
Given an even integer R indicates number of stars in first and last row.R is always an even number.Where 2<=R<=100


Output Description:
Print the pattern based on the given integer R.


Sample Input:
10


Sample Output:


**********  
****bb****  
***bbbb***  
**bbbbbb**  
*bbbbbbbb*  
**bbbbbb**  
***bbbb***  
****bb****  
**********  

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
  let half = n/2
  for(let row = 1; row<half; row++){
    let str = ''
    for(let star = row; star<=half; star++){  
      str+='*'
    }
    for(let leftb = row+2;leftb<=row*2; leftb++){      
      str+='b'      
    }
    for(let rightb = row+4;rightb<row*2+3;rightb++){
      str+='b'
    }
    for(let star = row; star<=half; star++){
      str+='*'
    }
    
    
    // for(let ;)
    console.log(str)
  }

    for(let row = half; row>0; row--){
    let str = ''
    for(let star = row; star<=half; star++){  
      str+='*'
    }
    for(let leftb = row+2;leftb<=row*2; leftb++){      
      str+='b'      
    }
    for(let rightb = row+4;rightb<row*2+3;rightb++){
      str+='b'
    }
    for(let star = row; star<=half; star++){
      str+='*'
    }
    
    
    // for(let ;)
    console.log(str)
  }
//  TOSOLVE THIs
  
  }
 

rl.on('close', () => {  

  const n = Number(userInput[0])
 
  result(n)

});
