import mongoose from 'mongoose'

const db=''

export default () => {
    const konek = () => {
        mongoose.connect(db,{useNewUrlParser:true}).then(() => {
            return console.info(`Successfully connected to ${db}`);
          })
          .catch(error => {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
          })
    }
    konek()
    mongoose.connection.on('disconnected',konek)
}