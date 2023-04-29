// 31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.   
function getMeridiem(hour) {
    if (hour >= 0 && hour < 12) {
        return 'AM';
    } else {
        return 'PM';
    }
}
console.log(getMeridiem(5));
console.log(getMeridiem(13));  