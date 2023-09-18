const audio = document.getElementById("audio")
const alertBox = document.getElementById('alertBox')

function showAlert() {
    audio.play()
    alertBox.classList.remove('hidden')

    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, 3000);
}
