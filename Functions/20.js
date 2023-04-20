// 20. Write a js program to find GCD (HCF) of two numbers using function.

function gcd(num1, num2) {
    let result = 0;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
         result = i
        }
    }
    console.log(result);
}

// i.e

gcd(2, 4);
gcd(4, 16);
gcd(68, 96);

