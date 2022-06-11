"use strict";
/*
document.querySelector(".seven").textContent = "Start Playing";
document.querySelector(".one").textContent = "Between 1 to 25";
document.querySelector(".two").textContent = "REPLAY";
document.querySelector(".three").textContent = "??";
document.querySelector(".four").value = 12;
document.querySelector(".six").textContent = "🖐️GUESS";
document.querySelector(".ten").textContent = 20;
document.querySelector(".eleven").textContent = 20;
*/

const age = Math.floor(Math.random() * 26);
// document.querySelector(".three").textContent = age;
let score = 20;
document.querySelector(".score").textContent = score;

document.querySelector(".six").addEventListener("click", function () {
  const guess = document.querySelector(".four").value;
  if (!guess) {
    // FOR INVALID ENTRY
    document.querySelector(".seven").textContent =
      "INVALID NUMBER🚫, TRY AGAIN!";
    document.querySelector("body").style.backgroundColor = "#FF0000";
    document.querySelector(".score").textContent = 0;
    document.querySelector(".result").textContent = "Enter a valid number";
  } else if (guess == age) {
    // WHEN GUESS IS CORRECT
    document.querySelector(".seven").textContent = "CORRECT✅";
    document.querySelector(".score").textContent = "";
    document.querySelector(".three").textContent = age;
    document.querySelector("body").style.backgroundColor = "#00FF00";
    document.querySelector(".result").textContent = "YOU WON🏆";
  } else if (guess > age) {
    // WHEN GUESS IS TOO HIGH
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".seven").textContent = "TOO HIGH📈";
    } else {
      document.querySelector(".result").textContent = "YOU LOST!😞";
      document.querySelector(".seven").textContent = "";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }
  } else if (guess < age) {
    // WHEN GUESS IS TOO LOW
    if (score > 1) {
      document.querySelector(".seven").textContent = "TOO LOW📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".result").textContent = "YOU LOST!😞";
      document.querySelector(".seven").textContent = "";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }
  }
});

document.querySelector(".two").addEventListener("click", function () {
  document.querySelector(".four").value = "";
  document.querySelector(".seven").textContent = "Start Playing";
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".result").textContent = "";
  document.querySelector('.score') = 20
});
