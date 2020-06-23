let dao=require('../dao'),_=require('lodash'),fileType=require('file-type'),stream=require('stream')

let add=(req,res)=>{
	if(req.body.nm&&req.file.gbr){
		let storedMimeType=fileType(req.file.gbr),data={nama:req.body.nm,tipe:storedMimeType.mime}
		data.gbr=req.file.gbr
		dao.Galeri.create(data).then(v=>{
			let r={nama:v.nama,tipe:v.tipe,id:v.id}
			res.json(r)
		}).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'tolong berikan nama dan berkas gambar'})
},get=(_,res)=>{
	dao.Galeri.findById(req.params.id).then(g=>{
		let fc=Buffer.from(g.isi,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+g.nama)
		res.set('Content-Type',g.tipe)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
},del=(req,res)=>{
	if(req.body.id){
		dao.Galeri.findById(req.body.id).then(g=>{
			g.destroy().then(()=>{
				res.json({msg:'deleted',item:g.id})
			}).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'gambar tidak ditemukan'})
},all=(_,res)=>{
	dao.Galeri.findAll({attributes:['nama','id','tipe','createdAt','updatedAt']}).then(a=>res.json(a))
.catch(e=>res.status(500).json(e))
}

module.exports={add,get,del,all}