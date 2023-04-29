// 51. Write a JavaScript function to get the week end date.   
function getWeekEndDate(date) {
    let endDate = new Date(date)
    let dayOfWeek = endDate.getDay();
    daysToAdd = endDate.getDate === 0 ? 0 : 7 - dayOfWeek;
    endDate.setDate(endDate.getDate() + daysToAdd)
    return endDate.toDateString();
}
// For Example :-

console.log(getWeekEndDate(new Date("June 13, 2014 08:11:00")));