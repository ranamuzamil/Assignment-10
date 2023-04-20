// 16. Write a js program to check whether a number is palindrome or not using function.

function isPalindrome(num) {
    let number = num.toString().split('').reverse().join('');
    let origin = num.toString()
    if (number == origin) {
        console.log(`${num} is Palindrome`);
    } else {
        console.log(`${num} is Not Palindrome`);
    }
}

// i.e
isPalindrome(12321);
isPalindrome(12345);
