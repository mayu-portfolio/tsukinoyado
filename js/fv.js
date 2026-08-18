const fvImages = document.querySelectorAll(".fv-slider img");

let current = 0;

fvImages[current].classList.add("active");

setInterval(() => {

  fvImages[current].classList.remove("active");

  current++;

  if (current >= fvImages.length) {
    current = 0;
  }

  fvImages[current].classList.add("active");

}, 5000);