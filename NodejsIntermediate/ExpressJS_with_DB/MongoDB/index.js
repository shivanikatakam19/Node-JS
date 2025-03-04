const express = require('express')
const connection = require('./connection')
const path = require('path')
const app = express()

const port = "8001"

const urlRouter = require('./routes/url')
const staticRouter = require('./routes/staticRoute')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const cookieParser = require('cookie-parser')
const { checkForAuthentication, restrictTo } = require('./middlewares/auth')

//connection
connection.connectMongodb('mongodb://127.0.0.1:27017/short-url').then(() => {
    console.log('mongo db connected')
})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(cookieParser()) //parsing the request cookies

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(checkForAuthentication) // checks for authentication

app.use('/admin', adminRouter)
app.use('/', staticRouter)
app.use('/url', restrictTo(['NORMAL', 'ADMIN']), urlRouter)
app.use('/user', userRouter)

app.listen(port, () => console.log('Server running!'))
