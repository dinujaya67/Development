function main() {
  let confirm = document.getElementById("mainResult").innerHTML;
  if (confirm == "You Lose !") {
    alert("Game over. Plese resart the game");
  } else {
    let x;
    do {
      x = Math.floor((Math.random() * 100) / 7.6);
    } while (x == 0);

    let currentTotal = parseInt(document.getElementById("result").innerHTML);
    let total = currentTotal + x;
    document.getElementById("result").innerHTML = total;

    if (total < 21) {
      document.getElementById("mainResult").innerHTML =
        "Generate another Card...";
    } else if (total == 21) {
      document.getElementById("mainResult").innerHTML = "You Have Won :)";
      alert("Congragulations...!");
      document.getElementById("btn-res").style.display = "block";
    } else if (total > 21) {
      document.getElementById("mainResult").innerHTML = "You Lose !";
      alert("Lost :(  Click restart to play again ...");
      document.getElementById("btn-res").style.display = "block";
    }

    var img = document.createElement("img");
    img.src = `images/${x}.png`;
    img.height = 300;

    document.body.appendChild(img);
  }
}

function restart() {
  location.reload();
}
