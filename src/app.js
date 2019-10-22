const express = require('express')
require('./db/mongoose')
const userrouter = require('./routers/user')

const app = express()
app.use(express.json())
app.use(userrouter)

module.exports = app