const nico = require('./nico.js')
let commentArea = null

document.addEventListener('DOMContentLoaded', () => {
    nico.init()
})

//test script
let interval = window.setInterval(() => {
    let comment = document.createElement('span')
    comment.setAttribute('class', 'comment anime-' + (Math.floor(Math.random() * 10) + 1))
    comment.textContent = 'コメントだよ！'
    commentArea.appendChild(comment)
},1000)


