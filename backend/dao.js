let Sequelize=require('sequelize'),multer=require('multer')

let seq=new Sequelize(process.env.DATABASE_URL),storage=multer.memoryStorage()
let upload=multer({storage:storage}),g1=(seq,Sequelize)=>{
	return seq.define('galeri',{tipe:{type:Sequelize.STRING},nama:{type:Sequelize.STRING},
isi:{type:Sequelize.BLOB('long')}})
},m1=(seq,Sequelize)=>{
	return seq.define('mobil',{merk:{type:Sequelize.STRING},hrg:{type:Sequelize.BIGINT},
depan:{type:Sequelize.BLOB('long')},belakang:{type:Sequelize.BLOB('long')},kiri:{type:Sequelize.BLOB('long')}
,kanan:{type:Sequelize.BLOB('long')},jum:{type:Sequelize.INTEGER},depan_type:{type:Sequelize.STRING},
belakang_type:{type:Sequelize.STRING},kiri_type:{type:Sequelize.STRING},kanan_type:{type:Sequelize.STRING}})
},m2=(seq,Sequelize)=>{
	return seq.define('mitra',{gbr:{type:Sequelize.BLOB('long')},nm:{type:Sequelize.STRING},
tipe:{type:Sequelize.STRING}})
},login=(seq,Sequelize)=>{
	return seq.define('login',{user:{type:Sequelize.STRING},pass:{type:Sequelize.STRING}})
},perusahaan=(seq,Sequelize)=>{
	return seq.define('company',{nm:{type:Sequelize.STRING},tlp:{type:Sequelize.STRING},
email:{type:Sequelize.STRING},wa:{type:Sequelize.STRING},moto:{type:Sequelize.TEXT}})
},peg=(seq,Sequelize)=>{
	return seq.define('pegawai',{nm:{type:Sequelize.STRING},gbr:{type:Sequelize.BLOB('long')},
almt:{type:Sequelize.STRING},tlp:{type:Sequelize.STRING},tipe:{type:Sequelize.STRING}})
}

module.exports={seq,Galeri:g1(seq,Sequelize),upload,Mobil:m1(seq,Sequelize),Mitra:m2(seq,Sequelize),
Login:login(seq,Sequelize),Sequelize,Company:perusahaan(seq,Sequelize),Pegawai:peg(seq,Sequelize)}