let dao=require('../dao'),_=require('lodash'),fileType=require('file-type'),stream=require('stream')

let img=(req,res)=>{
	dao.Mitra.findByPk(req.params.id).then(g=>{
		let fc=Buffer.from(g.gbr,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+g.nama+'.'+g.tipe)
		res.set('Content-Type',g.tipe)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
},all=(_,res)=>{
	dao.Mitra.findAll({attributes:['nm','id','createdAt','updatedAt']}).then(v=>res.json(v))
.catch(e=>res.status(500).json(e))
},add=(req,res)=>{
	if(req.body.nm&&req.file)fileType.fromBuffer(req.file.buffer).then(storedMimeType=>{
		let data={nm:req.body.nm,tipe:storedMimeType.ext,gbr:req.file.buffer}
		dao.Mitra.create(data).then(v=>res.json({msg:'sukses',data:v.id})).catch(e=>res.status(500).json(e))
	}).catch(e=>res.status(500).json(e))
	else res.status(500).json({msg:'tolong berikan nama dan berkas gambar'})
},del=(req,res)=>{
	if(req.body.id){
		dao.Mitra.findByPk(req.body.id).then(v=>v.destroy().then(d=>res.json({msg:'deleted',id:d.id}))
.catch(e=>res.status(500).json(e))).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'tolong berikan id yang benar'})
}

module.exports={img,all,add,del}