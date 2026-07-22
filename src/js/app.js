import burger from "./functions/burger.js";
import buttonsHover from "./functions/buttonsHover.js";
import changeModaltitle from "./functions/changeModalTitle.js";
import inputActive from "./functions/inputActive.js";
import inputmask from "./functions/inputmask.js";
import sliders from "./functions/sliders.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  changeModaltitle();
  inputmask();
  inputActive();
  buttonsHover();
  sliders();

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
