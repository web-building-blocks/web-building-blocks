const collapsedElements = document.querySelectorAll(".collapsed");
const expandedElements = document.querySelectorAll(".expanded");
const iconElements = document.querySelectorAll(".icon");

collapsedElements.forEach((collapsed, index) => {
  const expanded = expandedElements[index];
  const icon = iconElements[index];

  collapsed.addEventListener("click", () => {
    expanded.classList.toggle("hidden");
    icon.classList.toggle("rotate");
  });
});
