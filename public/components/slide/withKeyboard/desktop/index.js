const imgShow = document.getElementById('img')
const topicShow = document.getElementById('topic')
const switchCircles = document.getElementsByClassName('switch_circle')
let showIndex = 0
const imgSet = [
    {
        img: 'assets/USYD.jpeg',
        topic: 'University of Sydney'
    },
    {
        img: 'assets/SydneyOperaHouse.png',
        topic: 'Sydney Opera House'
    },
    {
        img: 'assets/Chinatown.jpg',
        topic: 'Chinatown'
    },
    {
        img: 'assets/SydneyTower.jpg',
        topic: 'Sydney Tower'
    },
    {
        img: 'assets/BondiBeach.jpg',
        topic: 'Bondi Beach'
    },
]

imgShow.src = imgSet[showIndex].img
topicShow.innerText = imgSet[showIndex].topic

function update(element) {
    for (let i=0; i<imgSet.length; i++) {
        switchCircles[i].style.backgroundColor = '#d7d6d6'
    }
    element.style.backgroundColor = '#910D02'
    imgShow.src = imgSet[showIndex].img
    topicShow.innerText = imgSet[showIndex].topic
}

function switchImg(index) {
    showIndex = index
    update(switchCircles[showIndex])
}

function nextImg() {
    if (showIndex == 4) {
        showIndex = 0
    } else {
        showIndex += 1
    }
    update(switchCircles[showIndex])
}

function lastImg() {
    if (showIndex == 0) {
        showIndex = 4
    } else {
        showIndex -= 1
    }
    update(switchCircles[showIndex])
}

function handleKey() {
    if (event.keyCode === 39) {
        nextImg()
    } else if (event.keyCode === 37) {
        lastImg()
    }
}

document.addEventListener("keydown", handleKey);
