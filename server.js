const app = require('express')()
const http = require('http').Server(app)
const path = require('path')
const win = require('./main.js')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'webview','comment.html'))
})

app.get('/comment.css', (req,res) => {
    res.sendFile(path.join(__dirname,'webview','comment.css'))
})

app.post('/api/comment/', (req,res) => {
    //コメントを受け取った際の処理
    win.win.webContents.send('receive-message',req.body.comment)
})

exports.runServer = () => {
    http.listen(8080, () => {
        console.log('listening...')
    })
}

