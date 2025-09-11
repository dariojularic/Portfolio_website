const heroNavBtn = document.querySelector(".hero-nav-btn")
const aboutNavBtn = document.querySelector(".about-nav-btn");
const skillsNavBtn = document.querySelector(".skills-nav-btn");
const portfolioNavBtn = document.querySelector(".portfolio-nav-btn");
const contactNavBtn = document.querySelector(".contact-nav-btn");
const heroSection = document.querySelector(".section--hero")
const aboutSection = document.querySelector(".about-section");
const skillsSection = document.querySelector(".skills-section");
const portfolioSection = document.querySelector(".portfolio-section");
const contactSection = document.querySelector(".contact-section");

heroNavBtn.addEventListener("click", () => {
  heroSection.scrollIntoView({
    behavior: "smooth",
  });
});

aboutNavBtn.addEventListener("click", () => {
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
});

skillsNavBtn.addEventListener("click", () => {
  skillsSection.scrollIntoView({
    behavior: "smooth",
  });
});

portfolioNavBtn.addEventListener("click", () => {
  portfolioSection.scrollIntoView({
    behavior: "smooth",
  });
});

contactNavBtn.addEventListener("click", () => {
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
});

// Intersection Observer
const sections = document.querySelectorAll(".container-show");
const observer = new IntersectionObserver(
  (entries) => {
    console.log("entries", entries);
    const entry = entries[0];
    console.log("entry", entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log(
        "entry.target.firstElementChild",
        entry.target.firstElementChild
      );
    }
  },
  {
    threshold: 0.3,
    // rootMargin: "-200px",
  }
);

sections.forEach( section =>
  observer.observe(section)

);
