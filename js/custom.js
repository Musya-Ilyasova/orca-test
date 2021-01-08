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
let featureCard = document.querySelectorAll(".feature-card");
function scrolling(e) {
  featureCard.forEach((element) => {
    if (isFullyVisible(element)) {
      element.querySelector(".feature-card__image").classList.add("is-active");
      element.querySelector(".feature-card__content").classList.add("is-active");
    } else {
      element.querySelector(".feature-card__image").classList.remove("is-active");
      element.querySelector(".feature-card__content").classList.remove("is-active");
    }
  });
}
function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  return ((top <= 100));
}
