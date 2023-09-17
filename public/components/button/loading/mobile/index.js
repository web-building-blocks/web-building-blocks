function toggleLoading() {
    const button = document.getElementById("loadingButton");

    if (button.classList.contains("loading")) {
        button.classList.remove("loading");
        button.textContent = "Click Me";
    } else {
        button.classList.add("loading");
        button.textContent = "Loading";
    }
}
