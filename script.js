"use strict";

function go_page(page) {
  const section = document.querySelector(".home__container");
  const nav = document.querySelector(".nav__list");
  const active = document.querySelector(".nav__list .active");

  if (page == 1) {
    section.style.marginLeft = 0;

    active.classList.remove("active");
    console.log(nav.children[0]);
    const sec = nav.children[0];
    sec.classList.add("active");
  }
  if (page == 2) {
    section.style.marginLeft = "-100%";
    active.classList.remove("active");
    const sec = nav.children[1];
    sec.classList.add("active");
  }
  if (page == 3) {
    section.style.marginLeft = "-200%";
    active.classList.remove("active");
    const sec = nav.children[2];
    sec.classList.add("active");
  }
  if (page == 4) {
    section.style.marginLeft = "-300%";
    active.classList.remove("active");
    const sec = nav.children[3];
    sec.classList.add("active");
  }
}
