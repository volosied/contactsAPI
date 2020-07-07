const express = require('express')
const server = express()

//Routes
const workRouter = require('./workContacts/workContactsRouter.js')

//Middleware
server.use(express.json())
server.use('/api/workContacts', workRouter)

module.exports = server