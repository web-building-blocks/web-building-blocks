const alertBox = document.getElementById('alertBox')
function showAlert() {
    alertBox.classList.remove('hidden')

    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, 3000);
}
