const ext = document.querySelector(".close");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
ext.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
