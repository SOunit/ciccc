const uuid = require('uuid')
const router = require('express').Router()
const { client } = require('../services/redis')

router.get('/', async (req, res) => {
  try {
    const todos = []

    for await (const { field, value } of client.hScanIterator('todos')) {
      todos.push({ ID: field, Title: value })
    }

    res.render('index', { model: todos })
  } catch (e) {
    console.error(e)
  }
})

router.get('/create', (req, res) => {
  res.render('create', { model: {} })
})

router.post('/create', async (req, res) => {
  await client.hSet('todos', uuid.v4(), req.body.Title)
  res.redirect('/')
})

router.get('/edit/:id', async (req, res) => {
  const todo = await client.hGet('todos', ID)
  res.render('edit', { model: { ID: req.params.id, Title: todo } })
})

router.post('/edit/:id', async (req, res) => {
  await client.hSet('todos', req.params.id, req.body.Title)
  res.redirect('/')
})

router.delete('/delete/:id', async (req, res) => {
  await client.hDel('todos', req.params.id)
  res.redirect('/')
})

module.exports = router
