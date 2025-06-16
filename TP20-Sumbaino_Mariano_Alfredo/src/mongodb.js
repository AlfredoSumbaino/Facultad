process.loadEnvFile()

const {MongoClient} = require('mongodb');
const client=new MongoClient(process.env.MONGODB_URLSTRING)
//funcion para conectar
const connectToDb= async()=> {
    try{
        await client.connect();
            console.log('Conectado a la BD correctamente')
        return client;

    } catch (error) {
        console.error('Error al conectarse: ', error)
    }

}
const disconnectToDb= async()=> {
    try{
        await client.close();
            console.log('Desconectado de la BD correctamente')

    } catch (error) {
        console.error('Error al desconectarse: ', error)
    }
}

module.exports = {connectToDb,disconnectToDb}