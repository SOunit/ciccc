// require('./services/redis').redisDB()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const methodOverride = require('method-override')

const {mongoConnect} = require('./services/mongo')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(methodOverride('_method'))

// app.use('/', require('./routes'))
app.use('/', require('./routes/mongo-route'))

mongoConnect()
app.listen(process.env.PORT || 8000, () => console.log('Server has started...'))