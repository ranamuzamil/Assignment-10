// 25. Write a JavaScript function to get a full textual representation of a month, such as January or June.   
function getFullMonth(date) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];
    let monthIndex = date.getMonth();
    let fullMonth = months[monthIndex];
    return fullMonth;
}
dt = new Date(2015, 10, 1);
console.log(getFullMonth(dt));