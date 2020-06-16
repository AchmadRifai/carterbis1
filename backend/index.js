let express = require('express')
let bodyParser = require('body-parser')
let db = require('./db')
let _ = require('lodash')
let uploads = require('./uploads')
let cors = require('cors')
let dao = require('./dao')

let PORT = process.env.PORT || 5000
let app = express()

app.use(cors()).use(bodyParser.json()).use(express.urlencoded({ extended: true }))
    .get('/img/:tipe/:filename', (req, res) => {
        let tipes = ['mobil', 'mitra', 'emp', 'galeri']
        if (-1 === tipes.indexOf(req.params.tipe)) return res.status(404).json({ err: 'no file exists' })
        let fs
        if (req.params.tipe === 'mobil') fs = db.mobils
        else if (req.params.tipe === 'mitra') fs = db.mitras
        else if (req.params.tipe === 'emp') fs = db.employers
		else if (req.params.tipe === 'galeri') fs = db.galeries
        if (!fs) return res.status(500).json({ err: 'internal error' })
        fs.find({ filename: req.params.filename }).toArray((e, f) => {
			if(e)return res.status(500).json({err:'internal error'})
            if (!f || f.length === 0) return res.status(404).json({ err: 'no file exists' })
            fs.openDownloadStreamByName(req.params.filename).pipe(res)
        })
    }).get('/',(_,res)=>{
		let hasil={}
		return dao.allMobil(res,hasil,()=>dao.allGalery(res,hasil,()=>dao.allKontak(res,hasil,()=>
dao.allEmployer(res,hasil,()=>dao.allMitra(res,hasil,()=>dao.allKontak(res,hasil,()=>dao.allLogin(res,hasil,
()=>res.json(hasil))))))))
	}).get('/komen',(_,res)=>{})

app.listen(PORT, () => console.log('Listening on ${PORT}'))