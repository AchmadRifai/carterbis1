let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let uploads = require('./uploads')
let db = require('./db')
let cors = require('cors')

let PORT = process.env.PORT || 5000

let app = express()

app.use(cors()).use(bodyParser.json()).use(express.urlencoded({ extended: true }))