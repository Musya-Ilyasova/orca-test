let isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);
function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}
document.addEventListener("DOMContentLoaded", scrolling, false);
let featureCardOdd = document.querySelectorAll(".feature-card:nth-child(odd)");
let featureCardEven = document.querySelectorAll(".feature-card:nth-child(even)");
function scrolling(e) {
  featureCardOdd.forEach((element) => {
    if (isFullyVisibleOdd(element)) {
      element.querySelector(".feature-card__image").classList.add("is-active");
      element.querySelector(".feature-card__content").classList.add("is-active");
    } else {
      element.querySelector(".feature-card__image").classList.remove("is-active");
      element.querySelector(".feature-card__content").classList.remove("is-active");
    }
  });
  featureCardEven.forEach((element) => {
    if (isFullyVisibleEven(element)) {
      element.querySelector(".feature-card__image").classList.add("is-active");
      element.querySelector(".feature-card__content").classList.add("is-active");
    } else {
      element.querySelector(".feature-card__image").classList.remove("is-active");
      element.querySelector(".feature-card__content").classList.remove("is-active");
    }
  });
}
function isFullyVisibleOdd(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  return ((top <= 100));
}

function isFullyVisibleEven(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  return ((top <= 190));
}


