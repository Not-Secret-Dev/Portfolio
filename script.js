const dropDownMenuBtn = document.querySelector("#dropdown-sc-nav button");
const dropDownMenu = document.querySelector("#dropdown-sc-nav ul");
const NavBtns = document.querySelectorAll("nav ul li");
const navSecs = document.querySelectorAll("section");
const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeContents = document.querySelectorAll(
  "main #resume .details .contents"
);

dropDownMenuBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("show");
});

NavBtns.forEach((NavBtn) => {
  NavBtn.addEventListener("click", () => {
    navSecs.forEach((navSec) => {
      if (NavBtn.id === navSec.id) {
        if (navSec.style.display === "none") {
          navSec.style.display = "flex";
          if (navSec.id === "resume") {
            navSec.style.display = "block";
          }
        }
      } else {
        navSec.style.display = "none";
      }
    });
  });
});

resumeBtns.forEach((resumeBtn) => {
  resumeBtn.addEventListener("click", () => {
    const isOpen = resumeBtn.classList.contains("open");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("open");
      btn.classList.add("close");
      btn.style.display = "inline";
    });

    resumeContents.forEach((content) => {
      content.style.display = "none";
      content.classList.remove("open");
    });

    if (!isOpen) {
      resumeBtn.classList.add("open");
      resumeContents.forEach((content) => {
        if (content.classList.contains(resumeBtn.id)) {
          content.style.display = "inline";
          content.classList.add("open");
        }
      });
    }
  });
});
