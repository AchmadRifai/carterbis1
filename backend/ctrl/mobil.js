let dao=require('../dao'),_=require('lodash'),fileType=require('file-type'),stream=require('stream')

let all=(_,res)=>{
	dao.Mobil.findAll({attributes:['merk','hrg','jum','id','createdAt','updatedAt']}).then(a=>res.json(a))
.catch(e=>res.status(500).json(e))
},get=(req,res)=>{
	dao.Mobil.findByPk(req.params.id).then(v=>{
		let berkas,berkas_type
		if(req.params.posisi==='depan'){
			berkas=v.depan
			berkas_type=v.depan_type
		}else if(req.params.posisi==='belakang'){
			berkas=v.belakang
			berkas_type=v.belakang_type
		}else if(req.params.posisi==='kanan'){
			berkas=v.kanan
			berkas_type=v.kanan_type
		}else if(req.params.posisi==='kiri'){
			berkas=v.kiri
			berkas_type=v.kiri_type
		}else res.status(500).json({msg:'gambar tidak ditemukan'})
		let fc=Buffer.from(berkas,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+v.merk)
		res.set('Content-Type',berkas_type)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
},add=(req,res)=>{
	if(req.body.merk&&req.body.hrg&&req.body.jum){
		let data={merk:req.body.merk,hrg:req.body.hrg,jum:req.body.jum}
		dao.Mobil.create(data).then(v=>res.json({data:v,msg:'sukses'})).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'format data tidak valid'})
},upload=(req,res)=>{
	if(req.body.id&&req.body.posisi&&req.file.gbr){
		let storedMimeType=fileType(req.file.gbr)
		dao.Mobil.findByPk(req.body.id).then(v=>{
			if(req.params.posisi==='depan'){
				v.depan=req.file.gbr
				v.depan_type=storedMimeType.mime
			}else if(req.params.posisi==='belakang'){
				v.belakang=req.file.gbr
				v.belakang_type=storedMimeType.mime
			}else if(req.params.posisi==='kanan'){
				v.kanan=req.file.gbr
				v.kanan_type=storedMimeType.mime
			}else if(req.params.posisi==='kiri'){
				v.kiri=req.file.gbr
				v.kiri_type=storedMimeType.mime
			}else res.status(500).json({msg:'gambar tidak ditemukan'})
			v.save().then(s=>res.json({msg:'sukses',id:s.id})).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'format data tidak valid'})
},del=(req,res)=>{
	if(req.body.id){
		dao.Mobil.findByPk(req.body.id).then(s=>{
			s.destroy().then(_=>res.json({msg:'sukses',id:req.body.id}))
.catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'format data tidak valid'})
}

module.exports={all,get,add,upload,del}