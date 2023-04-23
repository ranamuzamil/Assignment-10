// 6. Write a JavaScript function to add specified minutes to a Date object.  
function addMinutes(date, mins ) {
    return new Date(date.getTime() + mins * 60000)
}
// i.e
console.log(addMinutes(new Date(2014,10,2), 30).toString());
