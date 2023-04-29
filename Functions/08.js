// Function to find the number of digits in a number
function countDigits(num) {
    let count = 0;
    while (num > 0) {
      count++;
      num = Math.floor(num / 10);
    }
    return count;
  }
  
  // Function to check whether a number is an Armstrong number
  function isArmstrongNumber(num) {
    const numDigits = countDigits(num);
    let sum = 0;
    let originalNum = num;
    while (num > 0) {
      const digit = num % 10;
      sum += Math.pow(digit, numDigits);
      num = Math.floor(num / 10);
    }
    return sum === originalNum;
  }
  
  // Function to find and print all Armstrong numbers between a and b
  function printArmstrongNumbersBetween(a, b) {
    console.log(`The Armstrong numbers between ${a} and ${b} are:`);
    for (let i = a; i <= b; i++) {
      if (isArmstrongNumber(i)) {
        console.log(i);
      }
    }
  }
  
  // Example 
  const a = 1;
  const b = 1000;
  printArmstrongNumbersBetween(a, b);
  