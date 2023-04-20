// 19. Write a js program to generate nth Fibonacci term using function.

function fibonacci(num) {
    let x = 0;
    let y = 1;
    while (num > 0) {
        fn = x + y;
        x = y;
        y = fn;
        num = num - 1;         
        console.log(fn);
    }
}
// i.e
fibonacci(10);