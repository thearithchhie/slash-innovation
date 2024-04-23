const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 100;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
showSlide(currentSlide);

//
const totalSlides = document.getElementsByClassName("slide").length;
let valuePopular = document.querySelector(".value-popular");
const nextButton = document.querySelector(".button-popular-next");
const prevButton = document.querySelector(".button-popular-prev");
valuePopular.value = `${currentSlide}/${totalSlides}`;

// Next button event
nextButton.addEventListener(
  "click",
  () => (valuePopular.value = `${currentSlide + 1}/${totalSlides}`)
);

// Prev button event
prevButton.addEventListener(
  "click",
  () => (valuePopular.value = `${currentSlide}/${totalSlides}`)
);
