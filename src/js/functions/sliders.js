import { handlerSliderNum } from "./helpFunctions.js";

export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 900,
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: {
        delay: 6500,
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

  const gallerySlider = document.querySelector(".s-gallery__slider");

  if (gallerySlider) {
    const swiper = new Swiper(gallerySlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 7000,
      },
      pagination: {
        el: ".s-gallery .slider-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".s-gallery .slider-arrow._prev",
        nextEl: ".s-gallery .slider-arrow._next",
      },
      on: {
        init: (swiper) => {
          const sliderNum = document.querySelector(".s-gallery .slider-num");

          if (sliderNum) {
            handlerSliderNum(sliderNum, swiper);
          }
        },
        slideChange: (swiper) => {
          const sliderNum = document.querySelector(".s-gallery .slider-num");

          if (sliderNum) {
            handlerSliderNum(sliderNum, swiper);
          }
        },
      },
    });
  }

  const sectNavSliders = document.querySelectorAll(".sect-nav");

  if (sectNavSliders.length) {
    sectNavSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 15,
        slidesPerView: "auto",
        breakpoints: {
          1200: {
            spaceBetween: 50,
            slidesPerView: "auto",
          },
          1026: {
            spaceBetween: 30,
            slidesPerView: "auto",
          },
          768: {
            spaceBetween: 20,
            slidesPerView: "auto",
          },
        },
        on: {
          init: (swiper) => {
            changeEndStart(swiper);
          },
          slideChange: (swiper) => {
            changeEndStart(swiper);
          },
        },
      });

      function changeEndStart(swiper) {
        const activeIndex = swiper.activeIndex;
        const isEnd = swiper.isEnd;

        if (activeIndex === 0) {
          slider.classList.add("_start");
        } else {
          slider.classList.remove("_start");
        }

        if (isEnd) {
          slider.classList.add("_end");
        } else {
          slider.classList.remove("_end");
        }
      }
    });
  }

  const promoSlider = document.querySelector(".s-promo__slider");

  if (promoSlider) {
    const swiper = new Swiper(promoSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 7000,
      },
      pagination: {
        el: ".s-promo .slider-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".s-promo .slider-arrow._prev",
        nextEl: ".s-promo .slider-arrow._next",
      },
      breakpoints: {
        1026: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
      },
      on: {
        init: (swiper) => {
          const sliderNum = document.querySelector(".s-promo .slider-num");

          if (sliderNum) {
            handlerSliderNum(sliderNum, swiper);
          }
        },
        slideChange: (swiper) => {
          const sliderNum = document.querySelector(".s-promo .slider-num");

          if (sliderNum) {
            handlerSliderNum(sliderNum, swiper);
          }
        },
      },
    });
  }
}
