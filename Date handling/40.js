// 40. Write a JavaScript function to get timezone offset in seconds.  
function getTimeZone() {
    const zone = new Date().getTimezoneOffset() * 60
    console.log(zone);
}
getTimeZone();