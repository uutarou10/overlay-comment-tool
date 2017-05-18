const nico = require('./nico.js')
const ipc = require('electron').ipcRenderer
let commentArea = null

document.addEventListener('DOMContentLoaded', () => {
    nico.init()
})

//test script
let interval = window.setInterval(() => {
    nico.add("test")
},1000)

ipc.on('receive-message', (event, arg) => {nico.add(arg)})
