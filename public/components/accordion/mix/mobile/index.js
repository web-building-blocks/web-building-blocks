const collapsed1 = document.getElementById("collapsed1");
const collapsed2 = document.getElementById("collapsed2");
const collapsed3 = document.getElementById("collapsed3");
const expanded1 = document.getElementById("expanded1");
const expanded2 = document.getElementById("expanded2");
const expanded3 = document.getElementById("expanded3");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");

collapsed1.addEventListener("click", () => {
  expanded1.classList.toggle("hidden");
  icon1.classList.toggle("rotate");
});

collapsed2.addEventListener("click", () => {
  expanded2.classList.toggle("hidden");
  icon2.classList.toggle("rotate");
});

collapsed3.addEventListener("click", () => {
  expanded3.classList.toggle("hidden");
  icon3.classList.toggle("rotate");
});
