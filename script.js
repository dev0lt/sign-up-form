"use strict";

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");
const passwordCell = document.querySelector(".password_cell");
const errorPrompt = document.querySelectorAll(".error_prompt");

errorPrompt.forEach((el) => el.style.setProperty("visibility", "hidden"));

errorPrompt.forEach((el) => el.style.setProperty("color", "red"));

password.classList.remove("error");
confirmPassword.classList.remove("error");

confirmPassword.onchange = function () {
  if (!confirmPassword.value && !password.value) return;
  if (confirmPassword.value !== password.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    errorPrompt.forEach((el) => el.style.removeProperty("visibility"));
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    errorPrompt.forEach((el) => el.style.setProperty("visibility", "hidden"));
  }
};
