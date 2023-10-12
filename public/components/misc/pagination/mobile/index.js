document.querySelectorAll(".page-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        // Remove active class from all buttons
        document.querySelectorAll(".page-btn").forEach((innerBtn) => {
            innerBtn.classList.remove("active");
        });

        // Add active class to the clicked button
        this.classList.add("active");

        // Fetch data for the clicked page (just a mockup here)
        const page = this.getAttribute("data-page");
        console.log(`Fetching data for page ${page}...`);
    });
});
