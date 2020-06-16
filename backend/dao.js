let db=require('./db')

let allGalery=(res,hasil,next)=>{
	db.Galery.find((e,a)=>{
		if(e)return res.status(500).json(e)
		hasil.galery=a
		return next()
	})
}

let allMobil=(res,hasil,next)=>{
	db.Mobil.find((e,a)=>{
		if(e)return res.status(500).json(e)
		hasil.mobil=a
		return next()
	})
}

let allEmployer=(res,hasil,next)=>{
	db.Employer.find((e,a)=>{
		if(e)return res.status(500).json(e)
		hasil.employer=a
		return next()
	})
}

let allMitra=(res,hasil,next)=>{
	db.Mitra.find((e,a)=>{
		if(e)return res.status(500).json(e)
		hasil.mitra=a
		return next()
	})
}

let allKontak=(res,hasil,next)=>{
	db.Kontak.find((e,a)=>{
		if(e)return res.status(500).json(e)
		hasil.kontak=a
		return next()
	})
}

let allLogin=(res,hasil,next)=>{
	db.Login.find((e,a)=>{
		if(e)return res.status(500).json(e)
		hasil.login=a
		return next()
	})
}

let allKomen=(res,hasil,next)=>{
	db.Komen.find((e,a)=>{
		if(e)return res.status(500).json(e)
		hasil.komen=a
		return next()
	})
}

module.exports={allEmployer,allGalery,allMobil,allMitra,allKontak,allLogin,allKomen}