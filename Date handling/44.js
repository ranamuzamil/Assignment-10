// 44. Write a JavaScript function to get time differences in minutes between two dates.   
function getDifferInMinutes(d1,d2) {
 differ = Math.abs(new Date(d2 - d1));
 return differ.getMinutes()    
}
dt1 = new Date("October 13, 2014 11:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(getDifferInMinutes(dt1, dt2));