let cDate;
let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let cYear;
let nYear;
let daysLeft;
let daysPerYear;
let daysInFeb;
let uDay;
let uSec;
let uMin;
let uHour;

let Main = () => {
  cDate = new Date();
  cHour = cDate.getHours();
  cMin = cDate.getMinutes();
  cSec = cDate.getSeconds();
  cDay = cDate.getDate();
  cMonth = cDate.getMonth() + 1;
  cYear = cDate.getFullYear();

  nYear = cYear + 1;
  document.querySelector("#topic").innerHTML = `New Year ${nYear}`;

  if (cYear % 4 == 0) {
    daysPerYear = 366;
    daysInFeb = 29;
  } else {
    daysPerYear = 365;
    daysInFeb = 28;
  }

  switch (cMonth) {
    case 1:
      daysLeft = daysPerYear;
      break;
    case 2:
      daysLeft = daysPerYear - 31;
      break;
    case 3:
      daysLeft = daysPerYear - (31 + daysInFeb);
      break;
    case 4:
      daysLeft = daysPerYear - (62 + daysInFeb);
      break;
    case 5:
      daysLeft = daysPerYear - (92 + daysInFeb);
      break;
    case 6:
      daysLeft = daysPerYear - (123 + daysInFeb);
      break;
    case 7:
      daysLeft = daysPerYear - (153 + daysInFeb);
      break;
    case 8:
      daysLeft = daysPerYear - (184 + daysInFeb);
      break;
    case 9:
      daysLeft = daysPerYear - (215 + daysInFeb);
      break;
    case 10:
      daysLeft = daysPerYear - (245 + daysInFeb);
      break;
    case 11:
      daysLeft = daysPerYear - (275 + daysInFeb);
      break;
    case 12:
      daysLeft = daysPerYear - (306 + daysInFeb);
      break;
  }

  uSec = 59 - cSec;
  uMin = 59 - cMin;
  uHour = 23 - cHour;
  uDay = daysLeft - cDay;
  document.getElementById("seconds").innerHTML = timeFormat(uSec);
  document.getElementById("minutes").innerHTML = timeFormat(uMin);
  document.getElementById("hours").innerHTML = timeFormat(uHour);
  document.getElementById("days").innerHTML = timeFormat(uDay);
};
function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}
let interval = window.setInterval(Main, 1000);
