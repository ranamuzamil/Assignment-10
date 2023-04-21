// 3. Write a JavaScript function to get the number of days in a month.   

function daysInMonth(year, month) {
    let days = new Date(year, month, 0).getDate();
    console.log(days);            
}
// i.e
daysInMonth(2004 ,1) 
daysInMonth(2010 ,2)
daysInMonth(2023 ,7)
