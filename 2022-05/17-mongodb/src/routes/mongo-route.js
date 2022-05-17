const router = require('express').Router()
const { ObjectId } = require('mongodb')
const { mongoConnect } = require('../services/mongo')

router.get('/', async (req, res) => {
  const db = mongoConnect()
  const fetchedTodos = await db.collection('todos').find().toArray()
  console.log(fetchedTodos)
  const todos = fetchedTodos.map((item) => ({ ID: item._id, ...item }))
  res.render('index', { model: todos })
})

router.get('/create', (req, res) => {
  res.render('create', { model: {} })
})

router.post('/create', async (req, res) => {
  const db = mongoConnect()
  db.collection('todos')
    .insertOne({ Title: req.body.Title })
    .then((result) => {
      console.log('A todo has been added')
      res.redirect('/')
    })
})

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id

  const todo = await mongoConnect()
    .collection('todos')
    .findOne({ _id: new ObjectId(id) })

  res.render('edit', { model: { ID: req.params.id, Title: todo.Title } })
})

router.post('/edit/:id', async (req, res) => {
  const { Title } = req.body
  const ID = req.params.id
  console.log('post /edit', Title, ID)

  const db = mongoConnect()
  await db
    .collection('todos')
    .updateOne({ _id: new ObjectId(ID) }, { $set: { Title } })
  res.redirect('/')
})

router.get('/delete/:id', async (req, res) => {
  mongoConnect()
    .collection('todos')
    .deleteOne({ _id: new ObjectId(req.params.id) })
  res.redirect('/')
})

module.exports = router
