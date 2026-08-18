// スクロールアニメーション
const header = document.querySelector(".header");
const fv = document.querySelector(".fv");

window.addEventListener("scroll", () => {
  const fvHeight = fv.offsetHeight;

  if (window.scrollY >= fvHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ハンバーガーメニュー
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".header-list a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});