// Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Function to check if a number is Armstrong
  function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    while (temp > 0) {
      const digit = temp % 10;
      sum += digit ** digits;
      temp = Math.floor(temp / 10);
    }
    return sum === num;
  }
  
  // Function to check if a number is perfect
  function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) sum += i;
    }
    return sum === num;
  }
  
  // Example 
  const x = 17;
  console.log(`${x} is ${isPrime(x) ? 'prime' : 'not prime'}`);
  console.log(`${x} is ${isArmstrong(x) ? 'Armstrong' : 'not Armstrong'}`);
  console.log(`${x} is ${isPerfect(x) ? 'perfect' : 'not perfect'}`);