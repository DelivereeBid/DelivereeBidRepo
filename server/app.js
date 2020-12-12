const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./router')
const err = require('./middlewares/errHandler')
const upload = require('./middlewares/upload');

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)
app.use(err)

app.listen(port, () => console.log(`server running: http://localhost:${port}`))

module.exports = app