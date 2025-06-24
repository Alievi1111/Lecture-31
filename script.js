const burger = document.querySelector("#burger");
const mobileMenu = document.querySelector("#mobile-menu");

console.log(burger);

console.log(mobileMenu);

burger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});
