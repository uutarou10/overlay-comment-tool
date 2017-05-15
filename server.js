const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'view','comment.html'))
})

io.on('connection', (socket) => {
    console.log('user conected')

})

exports.runServer = () => {
    http.listen(8080, () => {
        console.log('listening...')
    })
}

