let express = require('express')
let bodyParser=require('body-parser'),_=require('lodash'),cors=require('cors'),stream=require('stream')
let dao=require('./dao')

let PORT = process.env.PORT || 5000,app = express()

dao.seq.sync().then(()=>{
	console.log('tables created')
	dao.Login.create({user:'admin',pass:'admin'}).success(l=>console.log(JSON.stringify(l)))
})

app.use(cors()).use(bodyParser.json()).use(express.urlencoded({ extended: true })).get('/',(_,res)=>{
	let hasil={}
	dao.Company.all().success(c=>{
		hasil.company=c
		dao.Galeri.findAll({attributes:['tipe','nama','id']}).success(g=>{
			hasil.galery=g
			dao.Mitra.findAll({attributes:['nm','id']}).success(m2=>{
				hasil.mitra=m2
				dao.Mobil.findAll({attributes:['merk','hrg','jum','id']}).success(m1=>{
					hasil.mobil=m1
					dao.Pegawai.findAll({attributes:['id','nama','almt','tlp']}).success(p=>{
						hasil.pegawai=p
						res.json(hasil)
					}).catch(e=>res.status(500).json(e))
				}).catch(e=>res.status(500).json(e))
			}).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	}).catch(e=>res.status(500).json(e))
}).get('/img/galery/:id',(req,res)=>{
	dao.Galeri.findById(req.params.id).success(g=>{
		let fc=Buffer.from(g.isi,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+g.nama)
		res.set('Content-Type',g.tipe)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
})

app.listen(PORT, () => console.log('Listening on ${PORT}'))
