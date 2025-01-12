const dropDownMenuBtn = document.querySelector("#dropdown-sc-nav button");
const dropDownMenu = document.querySelector("#dropdown-sc-nav ul");

dropDownMenuBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("show");
});
