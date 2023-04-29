// Function to check if a number is perfect or not
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (sum === num && num !== 0) {
      return true;
    }
    return false;
  }
  
  // Function to print all perfect numbers between given interval
  function printPerfectNumbers(start, end) {
    console.log(`Perfect numbers between ${start} and ${end}:`);
    for (let i = start; i <= end; i++) {
      if (isPerfectNumber(i)) {
        console.log(i);
      }
    }
  }
  
  // Example usage
  printPerfectNumbers(1, 10000);