let express = require('express')
let bodyParser = require('body-parser')
let db = require('./db')
let _ = require('lodash')
let uploads = require('./uploads')
let cors = require('cors')

let PORT = process.env.PORT || 5000
let app = express()

app.use(cors()).use(bodyParser.json()).use(express.urlencoded({ extended: true }))
    .get('/img/:tipe/:filename', (req, res) => {
        let tipes = ['mobil', 'mitra', 'emp']
        if (-1 === tipes.indexOf(req.params.tipe)) return res.status(404).json({ err: 'no file exists' })
        let fs
        if (req.params.tipe === 'mobil') fs = db.mobils
        else if (req.params.tipe === 'mitra') fs = db.mitras
        else if (req.params.tipe === 'emp') fs = db.employers
        if (!fs) return res.status(500).json({ err: 'internal error' })
        fs.find({ filename: req.params.filename }).toArray((_, f) => {
            if (!f || f.length === 0) return res.status(404).json({ err: 'no file exists' })
            fs.openDownloadStreamByName(req.params.filename).pipe(res)
        })
    })

app.listen(PORT, () => console.log('Listening on ${PORT}'))