export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 900,
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: {
        delay: 6500
      },
      pagination: {
        el: ".s-hero .slider-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next",
      },
      on: {
        init: (swiper) => {
          const sliderNum = document.querySelector(".s-hero .slider-num");

          if (sliderNum) {
            handlerSliderNum(sliderNum, swiper);
          }
        },
        slideChange: (swiper) => {
          const sliderNum = document.querySelector(".s-hero .slider-num");

          if (sliderNum) {
            handlerSliderNum(sliderNum, swiper);
          }
        },
      },
    });
  }

  function handlerSliderNum(el, swiper) {
    el.innerHTML = `
      <span>${swiper.activeIndex + 1}</span>/<span>${swiper.slides.length}</span>
    `;
  }
}
