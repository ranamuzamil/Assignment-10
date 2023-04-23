// 10. Write a JavaScript function to calculate 'yesterday day'.   
function yesterday(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() - 1);
    return date.toString();
  }
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));