// 30. Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.   
function getMeridiem(hour) {
    if (hour >= 0 && hour < 12) {
        return 'am';
    } else {
        return 'pm';
    }
}
//   For Example :-

console.log(getMeridiem(5));
console.log(getMeridiem(13));  