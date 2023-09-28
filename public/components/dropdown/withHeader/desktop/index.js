selectBox = document.getElementById('select_box')
selected = document.getElementById('selected')

function clickSelect() {
    if (selectBox.style.display == 'none') {
        selectBox.style.display = 'flex'
    } else {
        selectBox.style.display = 'none'
    }
}
