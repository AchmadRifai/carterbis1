let dao=require('../dao'),_=require('lodash')

let all=(_,res)=>{
	dao.Komen.findAll().then(r=>res.json(r)).catch(e=>res.status(500).json(e))
},add=(req,res)=>{
	if(req.body.nm&&req.body.msg&&req.body.mail)dao.Komen.create(req.body)
.then(v=>res.json({msg:'sukses',id:v.id})).catch(e=>res.status(500).json(e))
	else res.status(500).json({msg:'fill form please'})
},del=(req,res)=>{
	if(req.body.id)dao.Komen.findByPk(req.body.id).then(s=>{
	s.destroy().then(v=>res.json({msg:'deleted',id:v.id})).catch(e=>res.status(500).json(e))
}).catch(e=>res.status(500).json(e))
	else res.status(500).json({msg:'id not found'})
}

module.exports={all,add,del}