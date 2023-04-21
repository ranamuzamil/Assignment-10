// 4. Write a JavaScript function to get the month name from a particular date.  

function getMonthName(date) {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    const monthIndex = date.getMonth();
    console.log(monthNames[monthIndex]);
}
// As required i.e
getMonthName(new Date("10/11/2009"))
getMonthName(new Date("11/13/2014"))