// 20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).   
function getThreeLetterDay(date) {
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayIndex = date.getDay();
    var threeLetterDay = daysOfWeek[dayIndex];
    return threeLetterDay;
  }
  dt = new Date(2015, 10, 1);
  console.log(getThreeLetterDay(dt));  