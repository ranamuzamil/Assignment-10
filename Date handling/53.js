// 53. Write a JavaScript function to get the month end date. 
function getMonthEndDate(date) {
    let endDate = new Date(date);
    endDate.setMonth(endDate.getMonth() + 1, 0);  
    return endDate.toDateString();
  }
  console.log(getMonthEndDate(new Date("June 13, 2014 08:11:00")));