const MongoClient = require('mongodb').MongoClient
const config = require('../config')

let dbo,
  dbConnectorStr = config.databaseURL,
  dbName = 'nodejs-auth-test'

exports.InitiateMongoServer = () => {
  MongoClient.connect(dbConnectorStr)
    .then((client) => {
      console.log('Connected to Database')
      dbo = client.db(dbName)
    })
    .catch((err) => console.error('Error in mongo Connect: ', err))
}

exports.InitiateDatabase = () => {
  if (dbo) return dbo
  throw new Error('No database found')
}
