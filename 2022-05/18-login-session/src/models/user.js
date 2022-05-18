const { ObjectId } = require('mongodb')
const { InitiateDatabase } = require('../loaders/mongodb')

module.exports = class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    save(){
        const dbo = InitiateDatabase()
        return dbo.collection('users').insertOne(this)
    }
}