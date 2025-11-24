const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("fade-up")) {
        entry.target.classList.add("is-visible");
      }
      if (entry.target.classList.contains("reveal")) {
        entry.target.classList.add("visible");
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const elements = document.querySelectorAll(".fade-up, .reveal");
elements.forEach((el) => observer.observe(el));
