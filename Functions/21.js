// 21. Write a js program to find LCM of two numbers using function.
function lcm(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let result = max;
    while (result % min !== 0) {
        result += max;
    }
    console.log(result);
}
lcm(2, 4)
lcm(4, 16)
lcm(24, 15)