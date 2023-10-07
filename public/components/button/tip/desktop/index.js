function hanleClick() {
    alert("Succuessful!");
}

const button = document.getElementById("hoverButton");
const tooltip = document.getElementById("tooltip");

button.addEventListener("mouseenter", () => {
    tooltip.style.display = "block";
});

button.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
});
