// 12. Write a JavaScript function to get the minimum date from an array of dates.   
function getMinDate(array) {
    const date = array.map(element => new Date(element));
    const minDate = new Date(Math.min.apply(0, date));
    return minDate.getFullYear() + '/' + (minDate.getMonth() + 1) + '/' + minDate.getDate()
}
console.log(getMinDate(['2015/02/01', '2015/02/02', '2015/01/03']));