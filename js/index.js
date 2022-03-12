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


//slider
let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 3;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
