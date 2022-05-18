const dotenv = require('dotenv')

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

module.exports = {
  port: process.env.PORT,
  databaseURL: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
  api: {
    prefix: '/api',
  },
  rootDir: process.cwd(),
}
