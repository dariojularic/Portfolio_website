const aboutNavBtn = document.querySelector(".about-nav-btn");
const skillsNavBtn = document.querySelector(".skills-nav-btn");
const portfolioNavBtn = document.querySelector(".portfolio-nav-btn");
const contactNavBtn = document.querySelector(".contact-nav-btn");
const aboutSection = document.querySelector(".about-section");
const skillsSection = document.querySelector(".skills-section");
const portfolioSection = document.querySelector(".portfolio-section");
const contactSection = document.querySelector(".contact-section");

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
