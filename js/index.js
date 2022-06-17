const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

//Skills section
const btnToggleSkills = document.getElementById("toggle-skills");
const btnToggleSkills1 = document.getElementById("toggle-skills1");

const divSkillChange = document.getElementById("skill-change");

console.log(divSkillChange);

btnToggleSkills.addEventListener("click", () => {
  divSkillChange.classList.remove("row");
  divSkillChange.classList.add("roll-h");
});

btnToggleSkills1.addEventListener("click", () => {
  divSkillChange.classList.remove("roll-h");
  divSkillChange.classList.add("row");
});
