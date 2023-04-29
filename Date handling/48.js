// 48. Write a JavaScript function to get time differences in months between two dates.   
function getDifferInMonths(d1, d2) {
    d1h = new Date(d1).getMonth();
    d2h = new Date(d2).getMonth();
    differ = Math.abs(d2h - d1h);
    if (d1.getDate() < d2.getDate()) {
        differ += 1;        
    }
    return differ
}
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");

console.log(getDifferInMonths(dt1, dt2));