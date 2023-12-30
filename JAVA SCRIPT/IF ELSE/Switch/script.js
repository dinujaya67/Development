//Switch
let day;
switch (new Date().getDay()) {
  case 0:
    day = "SunDay";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
document.getElementById("today").innerHTML = "Today is " + day;

//Object
let student = {
  fName: "Nipuna",
  sName: "Dinujaya",
  lName: "Apa",
  age: 15,
  fullName: function () {
    return this.fName + " " + this.sName + " " + this.lName;
  },
};
document.getElementById("main").innerHTML = `My Name is ${student.fName} ${
  student.sName
} <br> My FullName is ${student.fullName()}<br> I'm ${student.age} years old`;

//validation
function view() {
  let age = document.getElementById("age").value;
  let Nationality = document.getElementById("Nationality").value;
  if (age <= 20 && Nationality === "SL") {
    document.getElementById("view").innerHTML = "You are Selected :)";
  } else if (
    age > 21 &&
    age < 50 &&
    (Nationality === "SL" || Nationality === "NZ")
  ) {
    document.getElementById("view").innerHTML =
      "You are Selected to Second Job :)";
  } else {
    document.getElementById("view").innerHTML = "You are Not Selected :(";
  }
}
