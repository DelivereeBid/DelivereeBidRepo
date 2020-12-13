const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./router')
const err = require('./middlewares/errHandler')
const upload = require('./middlewares/upload');
const http = require("http").createServer(app);
const io = require('socket.io')(http)

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)
app.use(err)

io.on("connection", socket => {
    // socket.emit("your id", socket.id);

    socket.on("your id", id => {
        console.log(id, 'ini id dari server')
        socket.emit("your id", id);
    })
    socket.on("your username", username => {
        console.log(username, 'ini id dari server')
        socket.emit("your username", username);
    })
    socket.on("send message", body => {
        console.log(body, 'ini dari server')
        io.emit("message", body)
    })
})

// app.listen(port, () => console.log(`server running: http://localhost:${port}`))

http.listen(port, () => console.log(`server running: http://localhost:${port}`))

module.exports = app