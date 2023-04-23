// 15. Write a JavaScript function to get the quarter (1 to 4) of the year.   
function quarterOfYear(date) {
    month = new Date(date).getMonth();
   return Math.ceil(month / 3)
}
console.log(quarterOfYear(new Date(2015, 1, 21)));

console.log(quarterOfYear(new Date(2015, 10, 18)));