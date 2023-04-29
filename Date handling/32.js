// 32. Write a JavaScript function to swatch Internet time (000 through 999).   
function getSwatchInternetTime(date) {
    var totalSeconds = (date.getUTCHours() * 3600) + (date.getUTCMinutes() * 60) + date.getUTCSeconds();
    var beat = Math.floor((totalSeconds / 86.4) % 1000);
    var formattedBeat = beat.toString().padStart(3, '0');
    return formattedBeat;
  }
  dt = new Date(1989, 10, 1);

console.log(getSwatchInternetTime(dt));