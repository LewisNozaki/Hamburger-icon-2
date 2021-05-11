"use strict";

const container = document.getElementsByClassName("container")[0];
let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];
let three = document.getElementsByClassName("three")[0];
let isXToggled = false;

// Click
const moveLines = () => {
  if (isXToggled) {
    console.log(isXToggled);
    one.classList.remove("left-side");
    one.classList.add("left-side-reverse");
    two.classList.remove("make-big");
    two.classList.add("make-big-reverse");
  } else {
    one.classList.add("left-side");
    two.classList.add("make-big");
    three.classList.add("right-side");
  }
  
  isXToggled = !isXToggled;
};

container.addEventListener("click", moveLines);

// Mouse Over
const createDots = () => {
  one.classList.remove("reverseMoveOne");
  one.classList.add("moveOne");
  two.classList.remove("reverseMoveTwo");
  two.classList.add("moveTwo");
  three.classList.remove("reverseMoveThree");
  three.classList.add("moveThree");
}

container.addEventListener("mouseover", createDots);

// Mouse Out
const reverseMoveLines = () => {
  one.classList.remove("moveOne");
  one.classList.add("reverseMoveOne");
  two.classList.remove("moveTwo");
  two.classList.add("reverseMoveTwo");
  three.classList.remove("moveThree");
  three.classList.add("reverseMoveThree");
  
}

container.addEventListener("mouseout", reverseMoveLines);