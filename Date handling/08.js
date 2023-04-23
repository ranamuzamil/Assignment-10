// 8. Write a JavaScript function to get difference between two dates in days.   
function dateDiffIndays(date1,date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    const oneDay = 24 * 60 * 60 * 1000
    diffInTime = Math.abs(date2.getTime() - date1.getTime());
    diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays

}
console.log(dateDiffIndays('04/02/2014', '11/04/2014'));
console.log(dateDiffIndays('12/02/2014', '11/04/2014'));