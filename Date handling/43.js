// 43. Write a JavaScript function to add specified months to a date.
function addMonths(date,month) {
    date.setMonth(date.getMonth() + month)
    return date    
}
dt = new Date(2014,10,2);
console.log(addMonths(dt, 10).toString());