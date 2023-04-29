// 19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   
function getTwoDigitDay(date) {
    var day = date.getDate();
    var twoDigitDay = day.toString().padStart(2, '0');
    return twoDigitDay;
}
d= new Date(2015, 10, 1);

console.log(getTwoDigitDay(d));