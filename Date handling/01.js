// 1. Write a JavaScript function to check whether an `input` is a date object or not.  

function isDate(input) {
    return input instanceof Date;
}
// i.e

console.log(isDate("October 13, 2014 11:13:00"));

console.log(isDate(new Date(86400000)));

console.log(isDate(new Date(99, 5, 24, 11, 33, 30, 0)));

console.log(isDate([1, 2, 4, 0]));