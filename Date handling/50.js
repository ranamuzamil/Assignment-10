// 50. Write a JavaScript function to get the week start date.   
function getWeekStartDate(date) {
    let startDate = new Date(date.getTime());
    let dayOfWeek = startDate.getDay();
    let daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return startDate.toDateString()
  }
//   For Example :-

  console.log(getWeekStartDate(new Date("June 13, 2014 08:11:00")));
  