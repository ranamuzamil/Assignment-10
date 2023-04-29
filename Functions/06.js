// Function to find all prime numbers between given interval using functions.
function findPrimesBetween(a, b) {
    const primes = [];
    for (let i = a; i <= b; i++) {
      let isPrime = true;
      if (i < 2) {
        isPrime = false;
      } else {
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  // Example usage:
  const a = 10;
  const b = 30;
  const primes = findPrimesBetween(a, b);
  console.log(`The prime numbers between ${a} and ${b} are: ${primes.join(', ')}`);