let dao=require('../dao'),_=require('lodash'),fileType=require('file-type'),stream=require('stream')

let add=(req,res)=>{
	if(req.body.nm&&req.file){
		fileType.fromBuffer(req.file.buffer).then(storedMimeType=>{
			let data={nama:req.body.nm,tipe:storedMimeType.ext,isi:req.file.buffer}
			dao.Galeri.create(data).then(v=>{
				let r={nama:v.nama,tipe:v.tipe,id:v.id}
				res.json(r)
			}).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json({error:e,msg:'file type bujat'}))
	}else res.status(500).json({msg:'tolong berikan nama dan berkas gambar'})
},get=(req,res)=>{
	dao.Galeri.findByPk(req.params.id).then(g=>{
		let fc=Buffer.from(g.isi,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+g.nama+"."+g.tipe)
		res.set('Content-Type',g.tipe)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
},del=(req,res)=>{
	if(req.body.id){
		dao.Galeri.findByPk(req.body.id).then(g=>{
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