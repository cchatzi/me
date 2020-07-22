const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");
const menuNav = document.getElementById("menuNav");
const navItems = document.querySelectorAll(".navItem");
const about = document.querySelector(".about");
const exp_edu = document.querySelector(".exp_edu");
const contact = document.querySelector(".contact");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const badge = document.getElementById("badge");
const header = document.getElementById("header");
const icon = document.querySelector(".img");
const name = document.getElementById("name");
const title = document.getElementById("title");
const main = document.getElementById("main");
const underCon = document.querySelector(".underConstruction");

hamburger.addEventListener("click", () => {
  navItems.forEach((item) => {
    item.classList.toggle("menuOpen");
    item.classList.add("opacity");
  });
  menuNav.classList.toggle("menuNavOpen");
  hamburger.classList.toggle("close");
});

navBar.addEventListener("click", (e) => {
  navItems.forEach((item) => {
    item.classList.remove("current");
    item.classList.add("opacity");
    item.classList.remove("menuOpen");
  });
  e.target.classList.add("current");
  menuNav.classList.remove("menuNavOpen");

  hamburger.classList.remove("close");

  if (about.classList.contains("current")) {
    first.classList.remove("hide");
    second.classList.add("hide");
    third.classList.add("hide");
  } else if (exp_edu.classList.contains("current")) {
    first.classList.add("hide");
    second.classList.remove("hide");
    third.classList.add("hide");
  } else {
    first.classList.add("hide");
    second.classList.add("hide");
    third.classList.remove("hide");
  }
});

badge.addEventListener("click", () => {
  header.classList.toggle("start");
  hamburger.classList.toggle("hide");
  navBar.classList.toggle("hide");
  icon.classList.toggle("icon");
  title.classList.toggle("hide");
  name.classList.toggle("hide");
  main.classList.toggle("hide");
  underCon.classList.toggle("hide");
});
