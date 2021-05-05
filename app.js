"use strict";

const container = document.getElementsByClassName("container")[0];
let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];
let three = document.getElementsByClassName("three")[0];

const moveLines = () => {
  one.classList.add("left-side");
  two.classList.add("make-big");
  three.classList.add("right-side");
};

container.addEventListener("click", moveLines);

const createDots = () => {
  one.classList.add("moveOne");
  two.classList.add("moveTwo");
  three.classList.add("moveThree");
}

container.addEventListener("mouseover", createDots);