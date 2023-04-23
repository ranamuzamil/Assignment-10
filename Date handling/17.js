// 17. Write a JavaScript function to convert a Unix timestamp to time.   
function convertUnixTimestamp(timestamp) {
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var formattedTime = hours + ':' + minutes + ':' + seconds;
    return formattedTime;
  }
  console.log(convertUnixTimestamp(1682284847));
  console.log(convertUnixTimestamp(1619388100)); 

