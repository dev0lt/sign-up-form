"use strict";

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");
const passwordCell = document.querySelector(".password_cell");

password.classList.remove("error");
confirmPassword.classList.remove("error");

const error = document.createElement("span");
error.style.setProperty("color", "red");
error.style.setProperty("font-size", "0.7rem");
error.style.setProperty("letter-spacing", "0.1rem");
error.textContent = "*Passwords do not match";

confirmPassword.onchange = function () {
  if (confirmPassword.value !== password.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    passwordCell.removeChild(passwordCell.lastChild);
    passwordCell.append(error);
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    passwordCell.removeChild(passwordCell.lastChild);
  }
};
