let commentArea = null

document.addEventListener('DOMContentLoaded', () => {
    commentArea = document.getElementById('comment-area')
    
    for(i=0; i <=12; i+=1) {
        createKeyframes(window.parent.screen.height / 12 * i, i)
    }
})

let interval = window.setInterval(() => {
    let comment = document.createElement('span')
    comment.setAttribute('class', 'comment anime-' + (Math.floor(Math.random() * 10) + 1))
    comment.textContent = 'コメントだよ！'
    commentArea.appendChild(comment)

    deleteOutOfDisplayElement()
},1000)

const createKeyframes = (y,index) => {
    const style = document.getElementsByTagName('style')[0]
    const windowWidth = window.parent.screen.width
    const windowHeight = window.parent.screen.height

    const keyframes =`
        @keyframes anime${index} {
            from{transform: translate(${windowWidth}px,${y}px);}
            to{transform: translate(${windowWidth * -1}px,${y}px);}
        }`
    style.appendChild(document.createTextNode(keyframes))
}

const deleteOutOfDisplayElement = () => {
    const comentElements = Array.apply(null,document.getElementsByClassName('comment'))
    comentElements.forEach((element) => {
        const x = element.getBoundingClientRect().left
        if (x == (window.parent.screen.width * -1)) {
            element.parentNode.removeChild(element)
        }
    })
}
