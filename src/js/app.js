import anchors from "./functions/anchors.js";
import burger from "./functions/burger.js";
import buttonsHover from "./functions/buttonsHover.js";
import changeModaltitle from "./functions/changeModalTitle.js";
import { contactsVideoObserve } from "./functions/contactsVideoObserve.js";
import headerScroll from "./functions/headerScroll.js";
import inputActive from "./functions/inputActive.js";
import inputmask from "./functions/inputmask.js";
import more from "./functions/more.js";
import productChange from "./functions/productChange.js";
import sliders from "./functions/sliders.js";
import tab from "./functions/tab.js";
import videoBg from "./functions/videoBg.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  changeModaltitle();
  inputmask();
  inputActive();
  buttonsHover();
  sliders();
  headerScroll();
  videoBg();
  productChange();
  more();
  tab();
  contactsVideoObserve();
  anchors();

  // Fancybox.show([{ type: "inline", src: "#modal-brone" }], {
  //   closeButton: false,
  // });
  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const modal = document.querySelector(id);
          const inputNote = modal.querySelector(".input-note");
          const modalTitle = modal.querySelector(".modal__title[data-text]");

          if (inputNote) inputNote.value = "";
          if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
        }
      },
    },
  });
});
