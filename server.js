const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const workRoute = require('./contacts/contactsRouter.js')

const app = express()

app.use(express.json())

//Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

//Routes
app.use('/api/work-contacts', workRoute)

module.exports = app