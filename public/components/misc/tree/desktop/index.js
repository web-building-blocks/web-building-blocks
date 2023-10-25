document.querySelectorAll(".toggle").forEach((toggle) => {
    toggle.addEventListener("click", function () {
        const children = this.parentElement.querySelector(".tree-children");
        if (children) {
            if (children.style.display === "none") {
                children.style.display = "block";
                this.textContent = "[-]";
            } else {
                children.style.display = "none";
                this.textContent = "[+]";
            }
        }
    });
});
