// Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});

var owl = $(".owl-carousel");
owl.owlCarousel();

$("#customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$("#customPrevBtn").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
// Carousel

const elAccordion = document.querySelectorAll("#title-accordion");

elAccordion.forEach((el, index) => {
  const desc = el.parentElement.querySelector("#desc-accordion");

  elAccordion[0].classList.add("active");

  if (el.classList.contains("active")) {
    desc.style.height = `${desc.scrollHeight}px`;
    el.querySelector("svg").classList.add("rotate");
  }

  el.addEventListener("click", function () {
    el.classList.toggle("active");

    if (el.classList.contains("active")) {
      desc.style.height = `${desc.scrollHeight}px`;
      el.querySelector("svg").classList.add("rotate");
    } else {
      desc.style.height = `0px`;
      el.querySelector("svg").classList.remove("rotate");
    }

    removeOpen(index);
  });
});

function removeOpen(index) {
  elAccordion.forEach((el2, index2) => {
    if (index != index2) {
      el2.classList.remove("active");

      const desc = el2.parentElement.querySelector("#desc-accordion");
      desc.style.height = "0px";
      el2.querySelector("svg").classList.remove("rotate");
    }
  });
}

const menuBtn = document.querySelector("#menu-btn");
const navbarNav = document.querySelector("#navbar-nav");
menuBtn.addEventListener("click", function (e) {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    navbarNav.style.height = `${navbarNav.scrollHeight}px`;
  } else {
    navbarNav.style.height = `0px`;
  }
});

window.addEventListener("resize", function () {
  if (this.innerWidth >= 1024) {
    menuBtn.classList.remove("active");
    navbarNav.classList.remove("active");
    navbarNav.style.height = `auto`;
  } else {
    menuBtn.classList.remove("active");
    navbarNav.classList.remove("active");
    navbarNav.style.height = `0px`;
  }
});
