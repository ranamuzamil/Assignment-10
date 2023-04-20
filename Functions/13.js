// 13. Write a js program to find sum of all natural numbers between 1 to n using function.

function isSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;        
    }
    return sum;
}
// i.e 

console.log(isSum(5));
console.log(isSum(20));