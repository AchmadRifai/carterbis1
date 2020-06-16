let host = 'mongodb://ashura:paradewa@cluster0-shard-00-00-1nxfr.mongodb.net:27017,cluster0-shard-00-01-1nxfr.mongodb.net:27017,cluster0-shard-00-02-1nxfr.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
let mongoose = require('mongoose')

let schema=mongoose.Schema
let conn = mongoose.createConnection(host, { useUnifiedTopology: true, useNewUrlParser: true })
let mobils
let mitras
let employers
let galeries

conn.once('open', () => {
    mobils = mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'mobil_img' })
    mitras = mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'mitra_img' })
    employers = mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'employer_img' })
	galeries=mongoose.mongo.GridFSBucket(conn.db, {bucketName: 'galery_img'})
})

let Galery=new schema({
	almt:String,
	tgl:Date
})
let Mobil=new schema({
	kode:String,
	merk:String,
	tahun:Number,
	harga:Number,
	depan:String,
	belakang:String,
	kiri:String,
	kanan:String
})
let Employer=new schema({
	nama:String,
	sebagai:String,
	gbr:String
})
let Mitra=new schema({
	kode:String,
	nama:String,
	almt:String,
	gbr:String,
	dari:Date
})
let Kontak=new schema({
	email:String,
	hp:String,
	wa:String,
	almt:String
})
let Login=new schema({
	akun:String,
	sandi:String,
	masuk:Boolean
})
let Komen=new schema({
	nama:String,
	email:String,
	tgl:Date,
	isi:String
})

module.exports = { conn, mobils, mitras, employers, galeries,Galery:mongoose.Model(Galery), 
Mobil:mongoose.Model(Mobil), Employer:mongoose.Model(Employer), Mitra:mongoose.Model(Mitra),
Kontak:mongoose.Model(Kontak), Login:mongoose.Model(Login), Komen:mongoose.Model(Komen) }