function toggleLoading() {
    const button = document.getElementById("loadingButton");
    button.innerHTML = "loading...";
    button.disabled = true;
    button.classList.remove("button2:hover");
    button.classList.remove("button2");

    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = "Click me";
        button.classList.add("button2:hover");
        button.classList.add("button2");
    }, 3000);
}
