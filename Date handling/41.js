// 41. Write a JavaScript function to add specified years to a date. 
function addYear(date,spYear) {
    date.setFullYear(date.getFullYear() + spYear)
    return date
}
dt = new Date(2014,10,2);
console.log(addYear(dt, 10).toString());