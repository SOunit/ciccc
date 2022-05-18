const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const redis = require('redis').createClient({ legacyMode: true })
const redisStore = require('connect-redis')(session)

const config = require('../config')
const routes = require('../routes')

exports.expressLoader = ({ app }) => {
  ;(() => redis.connect())()

  app.use(
    session({
      secret: config.sessionSecret,
      saveUninitialized: true,
      resave: true,
      store: new redisStore({
        host: 'locahost',
        port: 6379,
        client: redis,
        ttl: 300,
      }),
    })
  )

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.set('view engine', 'ejs')
  app.set('views', `${config.rootDir}/src/views`)
  app.use(express.static(`${config.rootDir}/public`))

  app.get('/status', (req, res) => {
    res.status(200).end()
  })

  app.use(config.api.prefix, routes)

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err['status'] = 404
    next(err)
  })

  /// error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message,
      },
    })
  })
}
