const newYear = "1 Jan 2024";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSec = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSec / 3600 / 24);
  const hours = Math.floor(totalSec / 3600) % 24;
  const min = Math.floor(totalSec / 60) % 60;
  const sec = Math.floor(totalSec) % 60;

  document.getElementById("days").innerHTML = timeFormat(days);
  document.getElementById("hours").innerHTML = timeFormat(hours);
  document.getElementById("minutes").innerHTML = timeFormat(min);
  document.getElementById("seconds").innerHTML = timeFormat(sec);
}
function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
