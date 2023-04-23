// 14. Write a JavaScript function to get the amount of days of a year.   
function daysOfAYear(year) {
    let isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    return isLeapYear ? 366 : 365;
}
console.log(daysOfAYear(2015));
console.log(daysOfAYear(2016));
