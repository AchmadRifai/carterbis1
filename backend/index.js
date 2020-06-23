let express = require('express')
let bodyParser=require('body-parser'),_=require('lodash'),cors=require('cors')
let dao=require('./dao'),galeri=require('./ctrl/galeri'),mobil=require('./ctrl/mobil')
let mitra=require('./ctrl/mitra'),login=require('./ctrl/login'),comp=require('./ctrl/company')
let peg=require('./ctrl/pegawai')

let PORT = process.env.PORT || 5000,app = express()

dao.seq.drop().then(()=>{
	dao.seq.sync().then(()=>{
		console.log('tables created')
		dao.Company.findAll().then(l=>{
			if(l.length===0)dao.Company.create({nm:'Nama Perusahaan',tlp:'0839080',email:'a.@mail.id'
,wa:'083682743',moto:'Kepuasan anda adalah kewajiban kami'}).then(l2=>console.log(JSON.stringify(l2)))
		})
		dao.Login.findAll().then(l=>{
			if(l.length===0)dao.Login.create({user:'admin',pass:'admin'}).then(l2=>
				console.log(JSON.stringify(l2)))
		})
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
}).get('/img/galery/:id',galeri.get).get('/img/mitra/:id',mitra.img)
.post('/add/galery',dao.upload.single('file'),galeri.add).post('/del/galery',galeri.del)
.get('/galeries',galeri.all).get('/mobils',mobil.all).get('/img/mobil/:posisi/:id',mobil.get)
.post('/mobil/add',mobil.add).post('/mobil/img',dao.upload.single('file'),mobil.upload)
.post('/mobil/del',mobil.del).get('/mitras',mitra.all).post('/mitra/add',dao.upload.single('file'),mitra.add)
.post('/mitra/del',mitra.del).post('/logins',login.one).get('/sesi',login.get).post('/repass',login.passwd)
.get('/logout',login.metu).get('/comp',comp.get).post('/comp/change',comp.ubah).get('/pegawai',peg.all)
.get('/pegawai/img/:id',peg.img).post('/pegawai/add',dao.upload.single('file'),peg.add)
.post('/pegawai/edit',peg.edit).post('/pegawai/reupload',dao.upload.single('file'),peg.gbr2)
.post('/pegawai/del',peg.del)

app.listen(PORT, () => console.log('Listening on '+PORT))
