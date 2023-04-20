// 18. Write a js program to find factorial of any number using function.

function factorial(num) {
    let result = 1;
    while (num > 0) {
        result *= num; 
        num = num -1 ;
    }
    console.log(result);

}
// i.e 
factorial(2);
factorial(3);
factorial(4);
