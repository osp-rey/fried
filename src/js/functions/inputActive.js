export default function inputActive() {
  const formControls = document.querySelectorAll(".form-control");

  if (formControls.length) {
    formControls.forEach((control) => {
      const label = control.querySelector(".input-label");
      const input = control.querySelector(".input");

      input.addEventListener("focus", () => {
        control.classList.add("_active");
      });
      input.addEventListener("blur", () => {
        control.classList.remove("_active");
      });
    });
  }
}
