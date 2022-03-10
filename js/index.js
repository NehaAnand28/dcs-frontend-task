let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");
let hamburgerIcon = document.querySelector(".icon");
let heroImg = document.querySelector(".hero-img");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
    heroImg.classList.remove("turn-off");

    
  } else {
    hamburgerIcon.classList.add("fa-times");
    navWrapper.classList.add("active");
    heroImg.classList.add("turn-off");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    hamburgerIcon.classList.remove("fa-bars");
  }

});
