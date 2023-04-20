// 15. Write a js program to find reverse of any number using function.
function reverseNumber(num) {
  let number = num.toString().split('').reverse().join('');
  console.log(number);
  
}

// i.e
reverseNumber(54321);
reverseNumber(12345);
