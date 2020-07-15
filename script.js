const about = document.querySelector(".about");
const exp_edu = document.querySelector(".exp_edu");
const contact = document.querySelector(".contact");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const startButton = document.getElementById("start-button");
const navBar = document.getElementById("nav-bar");
const name = document.getElementById("name");
const title = document.getElementById("title");
const badge = document.getElementById("badge");
const userName = document.getElementById("userName");
const userTitle = document.getElementById("userTitle");

startButton.addEventListener("click", () => {
  badge.classList.toggle("badge-icon");
  userName.classList.toggle("hide");
  userTitle.classList.toggle("hide");

  if (second.classList.contains("hide") && third.classList.contains("hide")) {
    first.classList.toggle("hide");
  } else {
    first.classList.add("hide");
  }

  navItems.forEach((item) => {
    item.classList.remove("current");
  });

  navBar.classList.toggle("hide");

  if (!second.classList.contains("hide")) {
    second.classList.add("hide");
  }

  if (!third.classList.contains("hide")) {
    third.classList.add("hide");
  }
  about.classList.add("current");
});

menuNav.addEventListener("click", (e) => {
  navItems.forEach((item) => {
    item.classList.remove("current");
  });
  e.target.classList.add("current");
  if (e.target.classList.contains("about")) {
    first.classList.add("show");
    first.classList.remove("hide");
    second.classList.add("hide");
    second.classList.remove("show");
    third.classList.add("hide");
    third.classList.remove("show");
  } else if (e.target.classList.contains("exp_edu")) {
    first.classList.add("hide");
    first.classList.remove("show");
    second.classList.add("show");
    second.classList.remove("hide");
    third.classList.add("hide");
    third.classList.remove("show");
  } else {
    first.classList.add("hide");
    first.classList.remove("show");
    second.classList.add("hide");
    second.classList.remove("show");
    third.classList.add("show");
    third.classList.remove("hide");
  }
});
