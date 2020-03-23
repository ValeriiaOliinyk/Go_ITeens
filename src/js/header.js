const burger = document.querySelector("burger");
const header = document.querySelector("header");

burger.addEventListener("click", function() {
  header.classList.toggle("is-active");
})