const {app, BrowserWindow}  = require('electron')
const path = require('path')
const url = require('url')
const ipc = require('electron').ipcMain
const server = require('./server.js')

let win

const createWindow = () => {
    const screenSize = require('electron').screen.getPrimaryDisplay().size
    win = new BrowserWindow({
        width : screenSize.width,
        height : screenSize.height,
        frame : false,
        transparent :true
    })

    win.loadURL(url.format({
        pathname : path.join(__dirname, 'mainview', 'main.html'),
        protocol : 'file:',
        slashes : true
    }))

    win.setIgnoreMouseEvents(true)
    win.setAlwaysOnTop(true)

    win.on('closed', () => {
        win = null
    })

    server.runServer()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform == 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(win == null) {
        createWindow()
    }
})

module.exports.add = (commentBody) => {
    win.webContents.send('receive-message', commentBody)
}
