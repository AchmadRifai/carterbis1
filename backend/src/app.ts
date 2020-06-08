import express,{ Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const PORT : string|number = process.env.PORT || 5000

const app=express()

app
    .use(cors())
    .use(bodyParser.json({ limit: '50mb' }))
    .use(bodyParser.urlencoded({ limit: '50mb', extended:true}));

app.listen(PORT,()=>console.log('listening on ${PORT}'))