// Write a js program to print all strong numbers between given interval using functions.

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  // Function to check whether a number is a strong number
  function isStrongNumber(num) {
    let sum = 0;
    let originalNum = num;
    while (num > 0) {
      const digit = num % 10;
      sum += factorial(digit);
      num = Math.floor(num / 10);
    }
    return sum === originalNum;
  }
  
  // Function to find and print all strong numbers between a and b
  function printStrongNumbersBetween(a, b) {
    console.log(`The strong numbers between ${a} and ${b} are:`);
    for (let i = a; i <= b; i++) {
      if (isStrongNumber(i)) {
        console.log(i);
      }
    }
  }
  
  // Example usage:
  const a = 1;
  const b = 1000;
  printStrongNumbersBetween(a, b);