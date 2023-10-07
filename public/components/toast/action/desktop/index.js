function showToast() {
    const toast = document.getElementById("toast");
    toast.style.opacity = "1";
    toast.style.visibility = "visible";

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.visibility = "hidden";
    }, 3000);
}

const closeToastBtn = document.getElementById("closeToast");
closeToastBtn.addEventListener("click", function () {
    const toast = document.getElementById("toast");
    toast.style.opacity = "0";
    toast.style.visibility = "hidden";
});

const toastButton = document.getElementById("toastButton");
toastButton.addEventListener("click", function () {
    alert("Toast button clicked!");
});
