const signinBtn = document.querySelector(".sign-in__btn");
const signupBtn = document.querySelector(".sign-up__btn");
const signupForm = document.querySelector(".sign-up-form");
const overlay = document.querySelector(".overlay");

const container = document.querySelector('.container')

signinBtn.addEventListener("click", () => {
  overlay.style.animationName = "translate-sign-in";
  signupForm.style.animationName = "translate-form";
});

signupBtn.addEventListener("click", () => {
  overlay.style.animationName = "translate-sign-up";
  signupForm.style.animationName = "translate-form-reverse";
});
