"use strict";

const smCups = document.querySelectorAll(".small-cups");
const liter = document.querySelector("#liter");
const remaining = document.querySelector(".remaining");
const percent = document.querySelector(".percentage");

// add full class up to clicked element then update height
const fullCup = (i) => {
  if (i === 0 && smCups[i].classList.contains("full")) {
    smCups.forEach((cup) => {
      cup.classList.remove("full");
      // updateHeight(-1);
    });
  } else {
    smCups.forEach((cup, j) => {
      if (j <= i) {
        cup.classList.add("full");
      } else {
        cup.classList.remove("full");
      }
    });
    // updateHeight(i);
  }
};

smCups.forEach((cup, i) => {
  cup.addEventListener("click", (e) => {
    fullCup(i);
  });
});
