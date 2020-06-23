let dao=require('../dao'),_=require('lodash'),fileType=require('file-type'),stream=require('stream')

let all=(_,res)=>{
	dao.Pegawai.findAll({attributes:['id','nm','almt','tlp']}).then(a=>res.json(a))
.catch(e=>res.status(500).json(e))
},img=(req,res)=>{
	if(req.params.id)dao.Pegawai.findByPk(req.params.id).then(v=>{
		let fc=Buffer.from(v.gbr,'base64'),rs=new stream.PassThrough()
		rs.end(fc)
		res.set('Content-disposition','attachment; filename='+v.tlp+'.'+v.tipe)
		res.set('Content-Type',v.tipe)
		rs.pipe(res)
	}).catch(e=>res.status(500).json(e))
	else res.status(500).json({msg:'not found'})
},add=(req,res)=>{
	if(req.file.gbr&&req.body.nm&&req.body.almt&&req.body.tlp)fileType.fromBuffer(req.file.buffer)
.then(storedMimeType=>{
		let data={gbr:req.file.buffer,nm:req.body.nm,almt:req.body.almt,
tlp:req.body.tlp,tipe:storedMimeType.ext}
		dao.Pegawai.create(data).then(v=>res.json({msg:'sukses',data:v.id})).catch(e=>res.status(500).json(e))
	}).catch(e=>res.status(500).json(e))
	else res.status(500).json({msg:'form invalid'})
},edit=(req,res)=>{
	if(req.body.nm&&req.body.almt&&req.body.tlp&&req.body.id){
		dao.Pegawai.findByPk(req.body.id).then(v=>{
			v.nm=req.body.nm
			v.almt=req.body.almt
			v.tlp=req.body.tlp
			v.save().then(g=>res.json({msg:'sukses',data:g.id})).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	} else res.status(500).json({msg:'form invalid'})
},del=(req,res)=>{
	if(req.body.id)dao.Pegawai.findByPk(req.body.id).then(v=>{
		v.destroy().then(d=>res.json({msg:'sukses',data:d.id})).catch(e=>res.status(500).json(e))
	}).catch(e=>res.status(500).json(e))
	else res.status(500).json({msg:'form invalid'})
},gbr2=(req,res)=>{
	if(req.body.id&&req.file.gbr)fileType.fromBuffer(req.file.buffer).then(smt=>
dao.Pegawai.findByPk(req.body.id).then(v=>{
	v.gbr=req.file.buffer
	v.tipe=smt.ext
	v.save().then(g=>res.json({msg:'sukses',id:g.id})).catch(e=>res.status(500).json(e))
}).catch(e=>res.status(500).json(e))
	).catch(e=>res.status(500).json(e))
	else res.status(500).json({msg:'form invalid'})
}

module.exports={all,img,add,edit,del,gbr2}