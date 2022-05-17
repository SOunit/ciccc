const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let dbo,
  dbConnectionStr = process.env.MONGO_URL,
  dbName = 'm10921todos'

exports.mongoConnect = () => {
  MongoClient.connect(dbConnectionStr)
    .then((client) => {
      console.log('Connected to Database!')
      dbo = client.db(dbName)
    })
    .catch((err) => console.error('Error in mongo connect: ', err))

  return dbo
}
