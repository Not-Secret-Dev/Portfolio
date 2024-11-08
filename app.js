const navLinks = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll("section");
const navbarHeight = document.querySelector("nav").offsetHeight;
const goToServicesLink = document.getElementById("go-to-services");
const aboutExpBtn = document.querySelector(".exp-about");
const aboutEduBtn = document.querySelector(".edu-about");
const aboutExpSec = document.querySelector(
  "#about .text-section .desc-section .Experience"
);
const aboutEduSec = document.querySelector(
  "#about .text-section .desc-section .Education"
);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
    const sectionId = link.id.replace("-link", "");
    const section = document.getElementById(sectionId);
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionPosition - navbarHeight,
      behavior: "smooth",
    });
  });
});

goToServicesLink.addEventListener("click", () => {
  const servicesBtn = document.getElementById("services-link");
  const section = document.getElementById("services");
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  navLinks.forEach((link) => link.classList.remove("active"));
  servicesBtn.classList.add("active");
  window.scrollTo({
    top: sectionPosition - navbarHeight,
    behavior: "smooth",
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

aboutExpBtn.addEventListener("click", () => {
  aboutExpBtn.classList.add("active");
  aboutEduBtn.classList.remove("active");
  if (aboutExpSec.classList.contains("disappear")) {
    aboutExpSec.classList.remove("disappear");
    aboutEduSec.classList.add("disappear");
  } else {
    aboutExpSec.classList.add("disappear");
    aboutExpBtn.classList.remove("active");
  }
});

aboutEduBtn.addEventListener("click", () => {
  aboutEduBtn.classList.add("active");
  aboutExpBtn.classList.remove("active");
  if (aboutEduSec.classList.contains("disappear")) {
    aboutEduSec.classList.remove("disappear");
    aboutExpSec.classList.add("disappear");
  } else {
    aboutEduSec.classList.add("disappear");
    aboutEduBtn.classList.remove("active");
  }
});
