const fadeBox = document.getElementById('fadeBox')
const slideBox = document.getElementById('slideBox')
const collapseBox = document.getElementById('collapseBox')



function showAlert(alert) {
    alert.classList.remove('hidden')

    setTimeout(() => {
        alert.classList.add('hidden');
    }, 1000);
}

showAlert(slideBox)
showAlert(fadeBox)
showAlert(collapseBox)
setInterval(function () {
    showAlert(slideBox)
    showAlert(fadeBox)
    showAlert(collapseBox)
}, 1500); 

