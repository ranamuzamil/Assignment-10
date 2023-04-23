// 2. Write a JavaScript function to get the current date.  
function currentDate() {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();  
    let year = date.getFullYear();
    console.log(`${month + 1}/${day}/${year}`);
    console.log(`${month + 1}-${day}-${year}`);
}
currentDate()