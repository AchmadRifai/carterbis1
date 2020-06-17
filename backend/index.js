let express = require('express')
let bodyParser = require('body-parser')
let mongoClient=require('mongodb').MongoClient
let _ = require('lodash')
let cors = require('cors')

let host = 'mongodb://ashura:paradewa@cluster0-shard-00-00-1nxfr.mongodb.net:27017,cluster0-shard-00-01-1nxfr.mongodb.net:27017,cluster0-shard-00-02-1nxfr.mongodb.net:27017/carter?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
let PORT = process.env.PORT || 5000
let app = express()
let client=new mongoClient(host)

app.use(cors()).use(bodyParser.json()).use(express.urlencoded({ extended: true }))

client.connect((e)=>{
	if(e){
		console.log(e)
		return
	} let db=client.db('carter')
	app.get('/',(_,res)=>{})
	app.listen(PORT, () => console.log('Listening on ${PORT}'))
})