require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const url = `${process.env.MONGO_URL}`

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  const dbo = db.db('aaa-test')

  //create collection
  // dbo.createCollection('people', (err, res) => {
  //     if(err) throw err
  //     console.log('Collection Created!');
  //     db.close()
  // })

  //insert into collection
  // const myOject = { name: 'hoge', email: 'hoge@hoge.com' }
  // dbo.collection('people').insertOne(myOject, (err, res) => {
  //     if(err) throw err
  //     console.log("1 document inserted");
  //     db.close()
  // })

  //insert multiple objects
  // const myOjects = [
  //     { name: 'hoge', email: 'hoge@hoge.com' },
  //     { name: 'hige', email: 'hige@hige.com' },
  //     { name: 'hage', email: 'hage@hage.com' },
  //     { name: 'hara', email: 'hara@hara.com' }
  // ]
  // dbo.collection('people').insertMany(myOjects, (err, res) => {
  //     if(err) throw err
  //     console.log(res)
  //     console.log("Number of documents inserted: " + res.insertedCount)
  //     db.close()
  // })

  // find one
  // dbo.collection('people').findOne({}, (err, res) => {
  //     if(err) throw err
  //     console.log(res.name)
  //     db.close()
  // })

  //find all
  // dbo.collection('people').find({}).toArray((err, res) => {
  //     if(err) throw err
  //     console.log(res)
  //     db.close()
  // })

  //filtering the result
  const query = { email: 'hige@hige.com' }
  dbo
    .collection('people')
    .find(query)
    .toArray((err, res) => {
      if (err) throw err
      console.log(res)
      db.close()
    })
})
