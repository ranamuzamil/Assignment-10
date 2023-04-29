// 45. Write a JavaScript function to get time differences in hours between two dates.  
function getDifferInHours(d1, d2) {
    d1h = new Date(d1).getHours();
    d2h = new Date(d2).getHours();
    differ = Math.abs(d2h - d1h);
    return differ
}
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");

console.log(getDifferInHours(dt1, dt2));