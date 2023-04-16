//  Write a js program to check whether a number is even or odd using functions.

function isEven(num) {
    return num % 2 === 0;
  }
let num = 4
console.log(`${num} is ${ isEven(num) ? 'even' : 'odd'}`);
