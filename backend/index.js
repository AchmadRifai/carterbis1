let express = require('express'),fileType=require('file-type')
let bodyParser=require('body-parser'),_=require('lodash'),cors=require('cors'),stream=require('stream')
let dao=require('./dao')

let PORT = process.env.PORT || 5000,app = express()

dao.seq.sync().then(()=>{
	console.log('tables created')
	dao.Login.findAll().then(l=>{
		if(l.length===0)dao.Login.create({user:'admin',pass:'admin'}).then(l2=>
			console.log(JSON.stringify(l2)))
	})
})

app.use(cors()).use(bodyParser.json()).use(express.urlencoded({ extended: true })).get('/',(_,res)=>{
	let hasil={}
	dao.Company.findAll().then(c=>{
		hasil.company=c
		dao.Galeri.findAll({attributes:['tipe','nama','id']}).then(g=>{
			hasil.galery=g
			dao.Mitra.findAll({attributes:['nm','id']}).then(m2=>{
				hasil.mitra=m2
				dao.Mobil.findAll({attributes:['merk','hrg','jum','id']}).then(m1=>{
					hasil.mobil=m1
					dao.Pegawai.findAll({attributes:['id','nm','almt','tlp']}).then(p=>{
						hasil.pegawai=p
						dao.Login.findAll().then(l=>{
							hasil.login=l
							res.json(hasil)
						}).catch(e=>res.status(500).json(e))
					}).catch(e=>res.status(500).json(e))
				}).catch(e=>res.status(500).json(e))
			}).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	}).catch(e=>res.status(500).json(e))
}).get('/img/galery/:id',(req,res)=>{
	dao.Galeri.findById(req.params.id).then(g=>{
		let fc=Buffer.from(g.isi,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+g.nama)
		res.set('Content-Type',g.tipe)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
}).get('/img/mitra/:id',(req,res)=>{
	dao.Mitra.findById(req.params.id).then(g=>{
		let fc=Buffer.from(g.isi,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+g.nama)
		res.set('Content-Type',g.tipe)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
}).post('/add/galery',dao.upload.single('file'),(req,res)=>{
	if(req.body.nm&&req.file.gbr){
		let storedMimeType=fileType(req.file.gbr),data={nama:req.body.nm,tipe:storedMimeType.mime}
		data.gbr=req.file.gbr
		dao.Galeri.create(data).then(v=>{
			let r={nama:v.nama,tipe:v.tipe,id:v.id}
			res.json(r)
		}).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'tolong berikan nama dan berkas gambar'})
}).post('/del/galery',(req,res)=>{
	if(req.body.id){
		dao.Galeri.findById(req.body.id).then(g=>{
			g.destroy().then(()=>{
				res.json({msg:'deleted',item:g.id})
			}).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'gambar tidak ditemukan'})
}).get('/galeries',(_,res)=>{
	dao.Galeri.findAll({attributes:['nama','id','tipe']}).then(a=>res.json(a))
.catch(e=>res.status(500).json(e))
}).get('/mobils',(_,res)=>{
	dao.Mobil.findAll({attributes:['merk','hrg','jum','id']}).then(a=>res.json(a))
.catch(e=>res.status(500).json(e))
}).get('/img/mobil/:posisi/:id',(req,res)=>{
	dao.Mobil.findById(req.params.id).then(v=>{
		let berkas,berkas_type

	}).catch(e=>res.status(500).json(e))
})

app.listen(PORT, () => console.log('Listening on '+PORT))
