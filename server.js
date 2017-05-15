const app = require('express')()
const http = require('http').Server(app)
const path = require('path')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'view','comment.html'))
})

app.get('/comment.css', (req,res) => {
    res.sendFile(path.join(__dirname,'view','comment.css'))
})

exports.runServer = () => {
    http.listen(8080, () => {
        console.log('listening...')
    })
}

