const { ObjectId } = require('mongodb')
const { InitiateDatabase } = require('../loaders/mongodb')

module.exports = class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  save() {
    const dbo = InitiateDatabase()
    return dbo.collection('users').insertOne(this)
  }

  findByEmailAndPassword() {
    const dbo = InitiateDatabase()
    return dbo
      .collection('users')
      .findOne({ email: this.email, password: this.password })
  }
}
