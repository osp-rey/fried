export default function buttonsHover() {
  const buttonsCircles = document.querySelectorAll(".btn-s._circle");

  if (buttonsCircles.length) {
    buttonsCircles.forEach(function (button) {
      button.addEventListener("mouseenter", function (e) {
        const rect = this.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        const span = this.querySelector("span");
        if (span) {
          span.style.top = relY + "px";
          span.style.left = relX + "px";
        }
      });

      button.addEventListener("mouseout", function (e) {
        const rect = this.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        const span = this.querySelector("span");
        if (span) {
          span.style.top = relY + "px";
          span.style.left = relX + "px";
        }
      });
    });
  }
}
