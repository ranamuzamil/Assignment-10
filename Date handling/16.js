// 16. Write a JavaScript function to count the number of days passed since beginning of the year.   
function passedDays(date) {
    let startOfYeaar = new Date(date.getFullYear(), 0, 0);
    let diff = date - startOfYeaar
    let oneDay = 24 * 60 * 60 * 1000;
    return (diff/oneDay)
}
console.log(passedDays(new Date(2015, 0, 15)));
console.log(passedDays(new Date(2015, 11, 14)));