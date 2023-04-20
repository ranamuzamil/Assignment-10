// 17- Write a js program to find sum of digits of a given number using function.

function sumOfNumber(num) {
    let sum = 0;
    while (num > 0) {
        let rem = num % 10;
        sum += rem;
        num = parseInt(num / 10);
    }
    console.log(sum);
}
// i.e
sumOfNumber(12345);
sumOfNumber(45667);