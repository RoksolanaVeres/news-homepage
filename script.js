// DOM elements
const overlay = document.querySelector(".page-overlay");
const dropdownMenu = document.querySelector(".navbar__dropdown_menu");
const menuButton = document.querySelector(".menu__button");
const menuCloseButton = document.querySelector(".menu-close__button");

function closeMenu() {
  dropdownMenu.classList.remove("open");
  overlay.classList.remove("active");
}

menuButton.addEventListener("click", () => {
  dropdownMenu.classList.add("open");
  overlay.classList.add("active");
});

menuCloseButton.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);
