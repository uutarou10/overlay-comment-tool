const app = require('express')()
const http = require('http').Server(app)
const path = require('path')
const main = require('./main.js')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'webview','comment.html'))
})

app.get('/comment.css', (req,res) => {
    res.sendFile(path.join(__dirname,'webview','comment.css'))
})

app.get('/bundle.js', (req,res) => {
    res.sendFile(path.join(__dirname,'webview','compiled','bundle.js'))
})

app.get('/api/comment/', (req,res) => {
    //コメントを受け取った際の処理
    main.add(req.query.comment)
    console.log(req.url)
    res.send('success')
})

exports.runServer = () => {
    http.listen(8080, () => {
        console.log('listening...')
    })
}

