// 52. Write a JavaScript function to get the month start date.
function getMonthStartDate(date) {
    let startDate = new Date(date);
    startDate.setDate(1);
    return startDate.toDateString();
}
console.log(getMonthStartDate(new Date("June 13, 2014 08:11:00")));