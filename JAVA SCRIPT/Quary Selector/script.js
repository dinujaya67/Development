// QuarySelector
document.querySelector("h1").style.backgroundColor = "green";
document.querySelector(".text").style.backgroundColor = "yellow";
document.querySelector("p.text").style.fontSize = "20px";
document.querySelector("#main").innerHTML =
  "Animals : <ul><li>Lion</li><li>Tiger</li><li>Elephant</li></ul>";

// QuarySelector //

// AddEventListener
const mainBtn = document.querySelector("#btn");
mainBtn.addEventListener("click", func);
document.addEventListener("dblclick", bgfunc);

function func() {
  alert("Hello! It's work");
}

function bgfunc() {
  alert("You clicked the Background");
}

// AddEventListener //

// local Storage
document.getElementById("localSto").innerHTML = localStorage.getItem("name1");
function lcs() {
  let names = document.getElementById("inp").value;
  localStorage.setItem("name1", names);
  location.reload();
}

// local Storage //

// Arrow Function
let hello = function () {
  return "Hello World!";
};

let hello2 = () => {
  return "Hello World2!";
};

let sum = (a, b) => a + b;

let x = () => "Hello!";

let y = (name) => "Hello! " + name;

document.getElementById("arrowH2.1").innerHTML = hello();
document.getElementById("arrowH2.2").innerHTML = hello2();
document.getElementById("arrowH2.3").innerHTML = sum(2, 3);
document.getElementById("arrowH2.4").innerHTML = x();
document.getElementById("arrowH2.5").innerHTML = y("Nipuna");
