// 49. Write a JavaScript function to get time differences in years between two dates.   
function getDifferInYears(d1,d2) {
    d1 = new Date(d1).getTime();
    d2 = new Date(d2).getTime();
    let differ = Math.abs(Math.floor((d2 -d1) / (1000 * 3600 * 24 * 365.25)));
    return differ;
}
dt1 = new Date("June 13, 2014 08:11:00");

dt2 = new Date("October 19, 2017 11:13:00");

console.log(getDifferInYears(dt1, dt2));