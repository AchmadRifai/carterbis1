let MongoClient = require('mongodb').MongoClient
let ObjectId = require('mongodb').ObjectID

let host = 'mongodb+srv://ashura:paradewa@cluster0-1nxfr.mongodb.net/carter?retryWrites=true&w=majority'

export default () => {
    let db = null
    MongoClient.connect(host, (e, c) => {
        if (e) {
            console.log('${e}')
            return null
        }
        db = c.db('carter')
    })
    return db
}