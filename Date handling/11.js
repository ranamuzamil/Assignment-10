// 11. Write a JavaScript function to get the maximum date from an array of dates.   
function getMaxDate(array){
    const date = array.map(dateString => new Date(dateString));
    const maxDate = new Date(Math.max.apply(0, date));
    return maxDate.getFullYear() + '/' + (maxDate.getMonth() + 1) + '/' + maxDate.getDate()
}
console.log(getMaxDate(['2015/02/01', '2015/02/02', '2015/01/03']));