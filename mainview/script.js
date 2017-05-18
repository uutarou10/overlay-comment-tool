const nico = require('./nico.js')
const ipc = require('electron').ipcRenderer
let commentArea = null

document.addEventListener('DOMContentLoaded', () => {
    nico.init()
})

ipc.on('receive-message', (event, arg) => {nico.add(arg)})
