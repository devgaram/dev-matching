export function lazyLoad() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const $el = entry.target as HTMLImageElement;
        $el.src = $el.dataset.src;
        observer.unobserve($el);
      }
    });
  });

  Array.from(document.querySelectorAll(".card__image")).forEach((img) => {
    observer.observe(img);
  });
}

export function infiniteScroll(onScroll: () => void) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onScroll();
        }
      });
    },
    { threshold: 1.0 }
  );

  observer.observe(document.getElementsByClassName("list-footer")[0]);
}
