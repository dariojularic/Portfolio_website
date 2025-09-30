const heroSection = document.querySelector(".section--hero");
const aboutSection = document.querySelector(".about-section");
const skillsSection = document.querySelector(".skills-section");
const portfolioSection = document.querySelector(".portfolio-section");
const contactSection = document.querySelector(".contact-section");
const viewWorkBtn = document.querySelector(".view-work-btn");
const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
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

const sections = document.querySelectorAll(".container-show");
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => observer.observe(section));

const splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  autoplay: true,
  interval: 3000,
  gap: 100,
  pauseOnHover: true,
  breakpoints: {
    768: {
      perPage: 1,
      gap: 40,
      interval: 4000,
    },
  },
  perMove: 1,
});

splide.mount();
