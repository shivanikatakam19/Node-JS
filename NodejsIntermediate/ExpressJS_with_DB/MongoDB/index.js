const express = require('express')
const connection = require('./connection')
const path = require('path')
const app = express()

const port = "8001"

const urlRouter = require('./routes/url')
const cookieParser = require('cookie-parser')

//connection
connection.connectMongodb('mongodb://127.0.0.1:27017/short-urls').then(() => {
    console.log('mongo db connected')
})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(cookieParser()) //parsing the request cookies

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/url', urlRouter)

app.listen(port, () => console.log('Server running!'))
