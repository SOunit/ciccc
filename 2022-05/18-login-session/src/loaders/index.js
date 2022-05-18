const {expressLoader} = require('./express')
const {InitiateMongoServer} = require('./mongodb')

exports.loaders = ({ expressApp }) => {
    InitiateMongoServer()
    expressLoader({ app: expressApp });
}