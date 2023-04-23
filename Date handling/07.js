// 7. Write a JavaScript function to test whether a date is a weekend.   
function isWeekend(date) {
    date = new Date(date)
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        console.log("is weekend");
    } else {
        console.log("undefined");
    }
}
isWeekend('Nov 15, 2014');
isWeekend('Nov 16, 2014');
isWeekend('Nov 17, 2014');