const nico = require('./nico.js')
let commentArea = null

document.addEventListener('DOMContentLoaded', () => {
    nico.init()
})

//test script
let interval = window.setInterval(() => {
    nico.add("test")
},1000)


