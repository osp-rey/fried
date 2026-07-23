import { createEl, handlerSliderNum } from "./helpFunctions.js";

export default function productChange() {
  const products = document.querySelectorAll(".card-product");
  const modalProduct = document.querySelector(".modal-product");

  if (products.length && modalProduct) {
    const modalProductClose = modalProduct.querySelector(
      ".modal-product__close",
    );
    const modalProductOverlay = modalProduct.querySelector(
      ".modal-product__overlay",
    );

    modalProductClose.addEventListener("click", handleClose);
    modalProductOverlay.addEventListener("click", handleClose);

    products.forEach((product) => {
      product.addEventListener("click", () => {
        initSlider(product.dataset.gallery.split(","));
        initInfo(product);
        handleOpen();
      });
    });

    function handleOpen() {
      document.body.classList.add("body-hidden");
      modalProduct.classList.add("_open");
    }
    function handleClose() {
      document.body.classList.remove("body-hidden");
      modalProduct.classList.remove("_open");
    }

    function initSlider(gallery) {
      const modalProductGallery = modalProduct.querySelector(
        ".modal-product__gallery",
      );
      const slider = createEl("div", "swiper modal-product__gallery-slider");
      const sliderWrapper = createEl("div", "swiper-wrapper");
      const sliderNav = createEl("div", "slider-nav");
      sliderNav.innerHTML = `
        <div class="slider-pagination"></div>
        <div class="slider-toggle">
          <div class="slider-arrow _prev">
            <svg width="67" height="13" viewBox="0 0 67 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M66.707 6.35352L0.707031 6.35352M6.70703 0.353516L0.707031 6.35352L6.70703 12.3535" stroke="currentColor"/>
            </svg>
          </div>
          <div class="slider-num"></div>
          <div class="slider-arrow _next">
            <svg width="67" height="13" viewBox="0 0 67 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.35352H66M60 12.3535L66 6.35352L60 0.353516" stroke="currentColor"/>
            </svg>
          </div>
        </div>
      `;

      modalProductGallery.innerHTML = "";

      gallery.forEach((gal) => {
        const slide = createEl(
          "a",
          "swiper-slide modal-product__gallery-slide",
        );
        const img = createEl("img");
        img.src = gal;
        slide.appendChild(img);
        slide.setAttribute("data-fancybox", "modal-product-gallery");
        slide.setAttribute("href", gal);

        sliderWrapper.appendChild(slide);
      });

      slider.appendChild(sliderWrapper);

      modalProductGallery.appendChild(slider);
      modalProductGallery.appendChild(sliderNav);

      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
          el: ".modal-product .slider-pagination",
          clickable: true,
        },
        navigation: {
          prevEl: ".modal-product .slider-arrow._prev",
          nextEl: ".modal-product .slider-arrow._next",
        },
        on: {
          init: (swiper) => {
            const sliderNum = document.querySelector(
              ".modal-product .slider-num",
            );

            if (sliderNum) {
              handlerSliderNum(sliderNum, swiper);
            }
          },
          slideChange: (swiper) => {
            const sliderNum = document.querySelector(
              ".modal-product .slider-num",
            );

            if (sliderNum) {
              handlerSliderNum(sliderNum, swiper);
            }
          },
        },
      });
    }
    function initInfo(product) {
      const title = modalProduct.querySelector(".modal-product__title");
      const price = modalProduct.querySelector(".modal-product__price");
      const content = modalProduct.querySelector(".modal-product__content");
      const weight = modalProduct.querySelector(".modal-product__weight");
      const value = modalProduct.querySelector(".modal-product__value");

      const weightItems = JSON.parse(product.dataset.weight);
      const valueItems = JSON.parse(product.dataset.value);

      title.textContent = product.dataset.title;
      price.textContent = product.dataset.price;
      content.innerHTML = product.dataset.descr;

      createItems(weight, weightItems);
      createItems(value, valueItems);

      function createItems(el, arr) {
        if (arr.length) {
          el.innerHTML = "";
          arr.forEach((item) => {
            const itemEl = createEl("div", "item");

            itemEl.innerHTML = `
            <div class="item-val">${item[1]}</div>
            <div class="item-text">${item[0]}</div>
          `;

            el.appendChild(itemEl);
          });
        }
      }
    }
  }
}
