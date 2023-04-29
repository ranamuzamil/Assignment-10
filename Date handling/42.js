// 42. Write a JavaScript function to add specified weeks to a date.   
function addWeeks(date,spWeeks) {
    date.setDate(date.getDate() + spWeeks * 7)
    return date
}
dt = new Date(2014,10,2);
console.log(addWeeks(dt, 10).toString());