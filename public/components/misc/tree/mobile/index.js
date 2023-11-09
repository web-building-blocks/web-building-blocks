document.querySelectorAll(".toggle").forEach((toggle) => {
    toggle.addEventListener("click", function () {
        const children = this.parentElement.querySelector(".tree-children");
        if (children) {
            if (children.style.display === "none") {
                children.style.display = "block";
                this.classList.add("expanded");
            } else {
                children.style.display = "none";
                this.classList.remove("expanded");
            }
        }
    });
});

document.querySelectorAll(".tree-children").forEach((children) => {
    children.style.display = "none";
});

document.querySelectorAll(".toggle").forEach((toggle) => {
    toggle.textContent = "";
});
