// 13. Write a JavaScript function that will return the number of minutes in hours and minutes.   
function timeConvert(minutes) {
    hours = Math.floor(minutes / 60);
    mins = minutes % 60;
    return minutes + ' minutes ' + ' = ' + hours + ' hour(s) ' + mins + ' minute(s) '       
}
console.log(timeConvert(200));