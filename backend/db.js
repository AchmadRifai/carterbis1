let host = 'mongodb+srv://ashura:paradewa@cluster0-1nxfr.mongodb.net/carter?retryWrites=true&w=majority'
let mongoose = require('mongoose')

let conn = mongoose.createConnection(host, { useUnifiedTopology: true, useNewUrlParser: true })
let mobils
let mitras
let employers

conn.once('open', () => {
    mobils = mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'mobil_img' })
    mitras = mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'mitra_img' })
    employers = mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'employer_img' })
})

module.exports = { conn, mobils, mitras, employers }