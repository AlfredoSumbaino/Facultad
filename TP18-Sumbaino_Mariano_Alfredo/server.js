const {connectToDb,disconnectToDb} = require('./src/mongodb');

const express= require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(async(req, res, next)=> {
    try {
        const client = await connectToDb()
        req.db = client.db('frutas').collection('frutas')
        next()
    }catch{
        console.log('Error al conectarse a la db');
    }
})

app.get('/', (req,res)=>{
    res.json({message: "holamundo"})
})
app.get('/frutas', async (req,res)=>{
    try{
        const frutas = await req.db.find().toArray()
        res.json ({frutas})
    }catch{
        console.log('error al traer la colleccion de frutas');
    }finally{
        await disconnectToDb()
    }
})

app.get('/frutas/nombre/:nombre', async (req,res)=>{
    try{
        const frutas = await req.db.find({
            nombre: { $regex: req.params.nombre, $options: 'i' }
        }).toArray();
        if (frutas.length > 0) {
            res.json({frutas});
        } else {
            res.status(404).json({error:'404 - fruta no encontrada'});
        }
    }catch{
        console.log('error al traer la colleccion de frutas');
    }finally{
        await disconnectToDb()
    }
})

app.get('/frutas/importe/:precio', async (req,res)=>{
    try{
        const precioMin = Number(req.params.precio);
        if (isNaN(precioMin)) {
            return res.status(400).json({error: 'El precio debe ser un número'});
        }
        const frutas = await req.db.find({
            precio: { $gte: precioMin }
        }).toArray();
        if (frutas.length > 0) {
            res.json({frutas});
        } else {
            res.status(404).json({error:'404 - fruta no encontrada'});
        }
    }catch{
        console.log('error al traer la colleccion de frutas');
    }finally{
        await disconnectToDb()
    }
})

app.listen(PORT, ()=>{
    console.log(`Ejecutandose en http://localhost:${PORT}`)
})