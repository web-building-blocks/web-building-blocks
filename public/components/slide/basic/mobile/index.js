const wordShow = document.getElementById('words')
const authorShow = document.getElementById('author')
const switchCircles = document.getElementsByClassName('switch_circle')
let showIndex = 0
const words = [
    {
        word: 'I love you the more in that I believe you had liked me for my own sake and for nothing else',
        author: 'John Keats'
    },
    {
        word: 'But man is not made for defeat. A man can be destroyed but not defeated.',
        author: 'Ernest Hemingway'
    },
    {
        word: "I have not failed. I've just found 10,000 ways that won't work.",
        author: 'Thomas A. Edison'
    }
]

wordShow.innerText = '"' + words[showIndex].word + '"'
authorShow.innerText = '- ' + words[showIndex].author

function nextWord() {
    for (let i=0; i<switchCircles.length; i++) {
        switchCircles[i].style.backgroundColor = '#ADADAD'
    }
    if (showIndex == 2) {
        showIndex = 0
    } else {
        showIndex += 1
    }
    switchCircles[showIndex].style.backgroundColor = '#e64626'
    wordShow.innerText = '"' + words[showIndex].word + '"'
    authorShow.innerText = '- ' + words[showIndex].author
}

function lastWord() {
    for (let i=0; i<switchCircles.length; i++) {
        switchCircles[i].style.backgroundColor = '#ADADAD'
    }
    if (showIndex == 0) {
        showIndex = 2
    } else {
        showIndex -= 1
    }
    switchCircles[showIndex].style.backgroundColor = '#e64626'
    wordShow.innerText = '"' + words[showIndex].word + '"'
    authorShow.innerText = '- ' + words[showIndex].author
}
