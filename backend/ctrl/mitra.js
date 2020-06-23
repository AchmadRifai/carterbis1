let dao=require('../dao'),_=require('lodash'),fileType=require('file-type'),stream=require('stream')

let img=(req,res)=>{
	dao.Mitra.findById(req.params.id).then(g=>{
		let fc=Buffer.from(g.isi,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+g.nama)
		res.set('Content-Type',g.tipe)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
},all=(_,res)=>{
	dao.Mitra.findAll({attributes:['nm','id','createdAt','updatedAt']}).then(v=>res.json(v))
.catch(e=>res.status(500).json(e))
},add=(req,res)=>{
	if(req.body.nm&&req.file.gbr){
		let storedMimeType=fileType(req.file.gbr),data={nm:req.body.nm,tipe:storedMimeType.mime}
		data.gbr=req.file.gbr
		dao.Mitra.create(data).then(v=>res.json({msg:'sukses',id:v.id})).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'tolong berikan nama dan berkas gambar'})
},del=(req,res)=>{
	if(req.body.id){
		dao.Mitra.findById(req.body.id).then(v=>v.destroy().then(d=>res.json({msg:'deleted',id:d.id}))
.catch(e=>res.status(500).json(e))).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'tolong berikan id yang benar'})
}

module.exports={img,all,add,del}