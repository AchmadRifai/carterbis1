let express = require('express')
let bodyParser = require('body-parser')
let multer = require('multer')
let cors = require('cors')
let dbne = require('./db')

let PORT = process.env.PORT || 5000

app = express()
db = dbne()

app.use(cors()).use(bodyParser.json()).use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log('Listening on ${PORT}'))