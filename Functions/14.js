// 14. Write a js program to find sum of all even or odd numbers in given range using function.

function isEveenOrOddSum(start, end, type) {
    let sum = 0;
    for(let i = start; i <= end; i++) {
        if(type === 'even' && i % 2 === 0) {
          sum += i;
        }
        else if(type === 'odd' && i % 2 !== 0) {
            sum += i;
        }
      }
      return sum;
    }
    
  //   i.e 
  console.log(isEveenOrOddSum(10, 20, 'even'));
  console.log(isEveenOrOddSum(10, 20, 'odd'));
  