export default function anchors() {
  const anchors = document.querySelectorAll(".anchors");
  console.log(window.location.pathname);
  if (anchors.length) {
    const headerHeight = document.querySelector(".header").clientHeight;
    anchors.forEach((container) => {
      const buttons = container.querySelectorAll("a");

      if (buttons.length) {
        buttons.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            if (
              window.location.pathname === "/" ||
              window.location.pathname === ""
            ) {
              e.preventDefault();
              const idSect = btn.getAttribute("href").slice(1);
              const section = document.querySelector(idSect);

              if (section) {
                const rect = section.getBoundingClientRect();
                const offsetTop =
                  rect.top - headerHeight + window.pageYOffset - 20;

                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }
            }
          });
        });
      }
    });
  }
}
