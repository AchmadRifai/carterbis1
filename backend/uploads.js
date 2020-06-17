let util = require("util")
let multer = require("multer")
let crypto = require('crypto')
let _=require('lodash')
let GridFsStorage = require("multer-gridfs-storage")

let host = 'mongodb://ashura:paradewa@cluster0-shard-00-00-1nxfr.mongodb.net:27017,cluster0-shard-00-01-1nxfr.mongodb.net:27017,cluster0-shard-00-02-1nxfr.mongodb.net:27017/carter?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

let storage_mobil = new GridFsStorage({
    url: host,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (_, file) => {
        return new Promise((resolv, reject) => {
            crypto.randomBytes(16, (e, buf) => {
                if (e) reject(e)
                let filename = buf.toString("hex") + path.extname(file.originalname)
                let fileInfo = { filename: filename, bucketName: 'mobil_img' }
                resolv(fileInfo)
            })
        })
    }
})
let storage_mitra = new GridFsStorage({
    url: host,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (_, file) => {
        return new Promise((resolv, reject) => {
            crypto.randomBytes(16, (e, buf) => {
                if (e) reject(e)
                let filename = buf.toString("hex") + path.extname(file.originalname)
                let fileInfo = { filename: filename, bucketName: 'mitra_img' }
                resolv(fileInfo)
            })
        })
    }
})
let storage_emp = new GridFsStorage({
    url: host,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (_, file) => {
        return new Promise((resolv, reject) => {
            crypto.randomBytes(16, (e, buf) => {
                if (e) reject(e)
                let filename = buf.toString("hex") + path.extname(file.originalname)
                let fileInfo = { filename: filename, bucketName: 'employer_img' }
                resolv(fileInfo)
            })
        })
    }
})
let storage_galery = new GridFsStorage({
    url: host,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (_, file) => {
        return new Promise((resolv, reject) => {
            crypto.randomBytes(16, (e, buf) => {
                if (e) reject(e)
                let filename = buf.toString("hex") + path.extname(file.originalname)
                let fileInfo = { filename: filename, bucketName: 'galery_img' }
                resolv(fileInfo)
            })
        })
    }
})

let uploadFileMobil = multer({ storage: storage_mobil }).single("file")
let uploadFileMitra = multer({ storage: storage_mitra }).single('file')
let uploadFileEmp = multer({ storage: storage_emp }).single('file')
let uploadFileGalery = multer({storage:storage_galery}).single('file')
let mobile = util.promisify(uploadFileMobil)
let mitrane = util.promisify(uploadFileMitra)
let employne = util.promisify(uploadFileEmp)
let galerine = util.promisify(uploadFileGalery)
module.exports = { mobile, mitrane, employne, galerine }