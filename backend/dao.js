let {Pool}=require('pg')

let db=new Pool({connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }})

module.exports={db}