//  Write a js program to find maximum and minimum between two numbers using functions.

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  function findMin(num1, num2) {
    return num1 < num2 ? num1 : num2;
  }
  //Example
  console.log(findMax(6,5,));
  console.log(findMin(6,5));