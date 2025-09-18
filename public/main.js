const heroSection = document.querySelector(".section--hero");
const aboutSection = document.querySelector(".about-section");
const skillsSection = document.querySelector(".skills-section");
const portfolioSection = document.querySelector(".portfolio-section");
const contactSection = document.querySelector(".contact-section");
const viewWorkBtn = document.querySelector(".view-work-btn");

const navBtns = document.querySelectorAll(".nav-btn");

// deploy onRender


// a:link

// jel bolje svaki <i> element zamjenit <svg> i zasto?
// bijela crta izmedu skills i portfolio
// ocu strelice stavit ispod projekta?

navBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const section = document.querySelector(`.${targetId}`);
    if (!section) return;
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

viewWorkBtn.addEventListener("click", () => {
  portfolioSection.scrollIntoView({
    behavior: "smooth",
  });
});

// Intersection Observer
const sections = document.querySelectorAll(".container-show");
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  },
  {
    threshold: 0.3,
    // rootMargin: "-200px",
  }
);

sections.forEach((section) => observer.observe(section));

const splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
  perMove: 1,
});

splide.mount();
