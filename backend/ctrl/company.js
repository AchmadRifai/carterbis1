let dao=require('../dao'),_=require('lodash')

let get=(_,res)=>{
	dao.Company.findById(1).then(v=>res.json(v)).catch(e=>res.status(500).json(e))
},ubah=(req,res)=>{
	if(req.body.nm&&req.body.tlp&&req.body.email&&req.body.wa&&req.body.moto){
		dao.Company.findById(1).then(v=>{
			v.nm=req.body.nm
			v.tlp=req.body.tlp
			v.email=req.body.email
			v.wa=req.body.wa
			v.moto=req.body.moto
			v.save().then(g=>res.json({msg:'sukses',data:g})).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	} else res.status(500).json({msg:'form invalid'})
}

module.exports={get,ubah}