const imgShow = document.getElementById('img')
const topicShow = document.getElementById('topic')
const previewImages = document.getElementsByClassName('preview_img')
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
        previewImages[i].style.opacity = '70%'
    }
    element.style.opacity = '100%'
    imgShow.src = imgSet[showIndex].img
    topicShow.innerText = imgSet[showIndex].topic
}

function switchImg(index) {
    showIndex = index
    update(previewImages[showIndex])
}
