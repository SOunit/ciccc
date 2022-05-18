const router = require('express').Router()
const User = require('../models/user')

router.get('/', (req, res) => {
  res.status(200).json({ msg: '/ Route checker' })
})

router.get('/login', (req, res) => {
  let sess = req.session

  if (sess.email) {
    return res.redirect('/api/admin')
  }
  res.render('login')
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = new User(email, password)
  const result = await user.findByEmailAndPassword()

  console.log(result)

  if (!result) {
    res.render('login')
  }

  req.session.email = req.body.email
  res.end('logged in')
})

router.get('/register', (req, res) => {
  let sess = req.session
  if (sess.email) {
    return res.redirect('/api/admin')
  }
  res.render('register')
})

router.post('/register', (req, res) => {
  const { email, password } = req.body

  const user = new User(email, password)
  user
    .save()
    .then((result) => {
      console.log(result)
      res.end('Registered')
    })
    .catch((err) => console.error(err))
})

router.get('/admin', (req, res) => {
  const { email } = req.session
  if (email) {
    res.write(`<h1>Hello ${email}</h1>`)
    res.end()
  } else {
    res.end('Login first')
  }
})

router.post('/login', (req, res) => {
  req.session.email = req.body.email
  res.end('logged in')
})

router.get('/admin', (req, res) => {
  const { email } = req.session

  if (email) {
    res.write(`<h1>Hello ${email}</h1>`)
    res.end()
  } else {
    res.end('Login first')
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.error(err)
    }
    res.redirect('/api/login')
  })
})

module.exports = router
