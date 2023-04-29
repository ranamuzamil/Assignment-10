// 47. Write a JavaScript function to get time differences in weeks between two dates.   
function getDifferInWeeks(d1, d2) {
    d1h = new Date(d1).getTime();
    d2h = new Date(d2).getTime();
    differ = Math.abs(Math.floor((d2h - d1h) / (1000 * 60 * 60 * 24 * 7)));
    return differ
}
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");

console.log(getDifferInWeeks(dt1, dt2));