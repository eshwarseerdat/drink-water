"use strict";

const smCups = document.querySelectorAll(".small-cups");
const liter = document.querySelector("#liter");
const remaining = document.querySelector(".remaining");
const percent = document.querySelector(".percentage");

// add full class up to clicked element then update height
const fullCup = (i) => {
  // if selected cup contains full class and next sibling doesn't remove full
  if (
    smCups[i].classList.contains("full") &&
    !smCups[i].nextElementSibling.classList.contains("full")
  ) {
    smCups[i].classList.remove("full");
    updateHeight(i--);
  }

  // if first cup contains full class when clicked remove full class from all cups
  if (i === 0 && smCups[i].classList.contains("full")) {
    smCups.forEach((cup) => {
      cup.classList.remove("full");
      updateHeight(-1);
    });
  }

  // add full class up to selected cup and remove full from others
  else {
    smCups.forEach((cup, j) => {
      if (j <= i) {
        cup.classList.add("full");
      } else {
        cup.classList.remove("full");
      }
    });
    updateHeight(i);
  }
};

// update height and display of remaining and percentage elements
const updateHeight = (i) => {
  const totalDrinks = i + 1;
  const percentHeight = (100 / smCups.length) * totalDrinks;
  const remainingHeight = 100 - percentHeight;

  updateText(percentHeight);

  if (totalDrinks === 0) {
    percent.classList.remove("show");
    remaining.classList.remove("hidden");
    remaining.style.height = `${remainingHeight}%`;
  } else {
    remaining.style.height = `${remainingHeight}%`;
    percent.style.height = `${percentHeight}%`;
    remaining.classList.remove("hidden");

    if (percentHeight > 0) percent.classList.add("show");
    if (totalDrinks === smCups.length) remaining.classList.add("hidden");
  }
};

// update remaining liter and percent drank text
const updateText = (percentDrank) => {
  const literDrank = percentDrank / 100;
  const remainingLiter = 2 - 2 * literDrank;
  liter.innerText = `${remainingLiter}L`;
  percent.innerText = `${percentDrank}%`;
};

smCups.forEach((cup, i) => {
  cup.addEventListener("click", (e) => {
    fullCup(i);
  });
});
