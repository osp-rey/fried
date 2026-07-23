export function contactsVideoObserve() {
  const video = document.querySelector(".s-contacts__video-gallery");

  if (video) {
    function callback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      })
    }

    const observer = new IntersectionObserver(callback);

    const config = {
      root: null,
      rootMargin: "0px",
      scrollMargin: "0px",
      threshold: 0.01,
    };

    observer.observe(video, config);
  }
}
