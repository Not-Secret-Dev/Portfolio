const dropDownMenuBtn = document.querySelector("#dropdown-sc-nav button");
const dropDownMenu = document.querySelector("#dropdown-sc-nav ul");
const NavBtns = document.querySelectorAll("nav ul li");
const NavSecs = document.querySelectorAll("section");

dropDownMenuBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("show");
});

NavBtns.forEach((NavBtn) => {
  NavBtn.addEventListener("click", () => {
    NavSecs.forEach((NavSec) => {
      if (NavBtn.id === NavSec.id) {
        if (NavSec.style.display === "none") {
          NavSec.style.display = "block";
        }
      } else {
        NavSec.style.display = "none";
      }
    });
  });
});
