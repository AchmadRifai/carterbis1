let dao=require('../dao'),_=require('lodash')

let one=(req,res)=>{
	dao.Login.findByPk(1).then(v=>{
		v.loge=req.body.tgl
		v.save().then(g=>res.json({data:g,msg:'sukses'})).catch(e=>res.status(500).json(e))
	}).catch(e=>res.status(500).json(e))
},passwd=(req,res)=>{
	if(req.body.newpass){
		dao.Login.findByPk(1).then(v=>{
			v.pass=req.body.newpass
			v.save().then(u=>req.json({msg:'sukses',data:u})).catch(e=>res.status(500).json(e))
		}).catch(e=>res.status(500).json(e))
	}else res.status(500).json({msg:'tolong masukan password yang benar'})
},get=(_,res)=>{
	dao.Login.findByPk(1).then(v=>res.json(v)).catch(e=>res.status(500).json(e))
},metu=(_,res)=>{
	dao.Login.findByPk(1).then(v=>{
		v.loge=null
		v.save().then(g=>res.json({msg:'sukses',data:g})).catch(e=>res.status(500).json(e))
	}).catch(e=>res.status(500).json(e))
}

module.exports={one,passwd,get,metu}