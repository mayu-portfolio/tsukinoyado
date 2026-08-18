const sliders = document.querySelectorAll(".card-slider");

sliders.forEach((slider) => {
  const prevBtn = slider.querySelector(".slider-prev");
  const nextBtn = slider.querySelector(".slider-next");

  const container = slider.querySelector(
    ".room-card-container, .plan-card-container, .facility-card-container"
  );

  const card = container.querySelector(":scope > div");
  const gap = 20;
  const move = card.offsetWidth + gap;


  nextBtn.addEventListener("click", () => {

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft < maxScroll) {
      container.scrollBy({
        left: move,
        behavior: "smooth",
      });
    }

  });


  prevBtn.addEventListener("click", () => {

    if (container.scrollLeft > 0) {
      container.scrollBy({
        left: -move,
        behavior: "smooth",
      });
    }

  });

});