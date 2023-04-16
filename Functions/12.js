// 12. Write a js program to print all even or odd numbers in given range using function. 

function printEvenOrOddNumbers(start, end, type) {
    for(let i = start; i <= end; i++) {
      if(type === 'even' && i % 2 === 0) {
        console.log(i);
      }
      else if(type === 'odd' && i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
//   i.e 
  const start = 1;
  const end = 10;
  const type = 'even';
  console.log(`${type} numbers between ${start} to ${end}:`);
  printEvenOrOddNumbers(start, end, type);
  