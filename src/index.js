const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const openRoutes = require('./routes/open')
const closedRoutes = require('./routes/closed')

const app = express()

mongoose.connect('mongodb+srv://backend:backendawon@principal-sv9tu.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(openRoutes)
app.use(closedRoutes)

// Abrindo servidor na porta padrão ou na porta 3001
app.listen(process.env.PORT || 3001)