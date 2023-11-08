const switchCircles = document.getElementsByClassName('switch_circle')
const contentBox = document.getElementById('content_box')
let showIndex = 1

function update(index) {
    for (let i=0; i<switchCircles.length; i++) {
        switchCircles[i].style.backgroundColor = '#d7d6d6'
    }
    switchCircles[index-1].style.backgroundColor = '#e64626'
}

function nextImg() {
    contentBox.style.transition = "left 0.5s ease-in-out";
    showIndex++
    contentBox.style.left = -400 * showIndex + "px";
    if (showIndex == 6) {
        showIndex = 1
        setTimeout(function() {
            contentBox.style.transition = "none";
            contentBox.style.left = "-400px";
        }, 500);
    }
    update(showIndex)
}

function lastImg() {
    contentBox.style.transition = "left 0.5s ease-in-out";
    showIndex--
    contentBox.style.left = -400 * showIndex + "px";
    if (showIndex == 0) {
        showIndex = 5
        setTimeout(function() {
            contentBox.style.transition = "none";
            contentBox.style.left = "-2000px";
        }, 500);
    }
    update(showIndex)
}
