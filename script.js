"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal1 = document.querySelector("#modal1");
const btnCloseModal1 = document.querySelector("#closeModal1");
const modal2 = document.querySelector("#modal2");
const btnCloseModal2 = document.querySelector("#closeModal2");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[0].addEventListener("click", openModal);
  btnOpenModal[1].addEventListener("click", openModal1);
  btnOpenModal[2].addEventListener("click", openModal2);
}

btnCloseModal.addEventListener("click", closeModal);
btnCloseModal1.addEventListener("click", closeModal);
btnCloseModal2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// the argument in the function doesn't matter, have just named it
// esc to demonstrate which key i am using, this is an easy way
//of logging different keyboard presses to the function

document.addEventListener("keydown", function (esc) {
  if (esc.key === "Escape")
    if (
      modal.classList.contains("hidden") ||
      modal1.classList.contains("hidden") ||
      modal2.classList.contains("hidden")
    ) {
      closeModal();
    }
});
