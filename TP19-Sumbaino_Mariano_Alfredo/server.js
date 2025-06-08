const {connectToDb,disconnectToDb} = require('./src/mongodb');
const { validarCon, validarConParcialmente } = require('./src/countries');
const express= require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(async(req, res, next)=> {
    try {
        const client = await connectToDb()
        req.db = client.db('countries').collection('countries')
        next()
    }catch{
        console.log('Error al conectarse a la db');
    }
})

app.get('/', (req,res)=>{
    res.json({message: "holamundo Base de datos countries"})
})
app.get('/countries', async (req,res)=>{
    try{
        const countries = await req.db.find().toArray()
        res.json ({countries})
    }catch{
        console.log('error al traer la colleccion de countries');
    }finally{
        await disconnectToDb()
    }
})

app.get('/countries/:nombre', async (req,res)=>{
    try{
        const countries = await req.db.find({
            pais: { $regex: req.params.nombre, $options: 'i' }
        }).toArray();
        if (countries.length > 0) {
            res.json({countries});
        } else {
            res.status(404).json({error:'404 - Pais no encontrada'});
        }
    }catch{
        console.log('error al traer la colleccion de Pais');
    }finally{
        await disconnectToDb()
    }
})


app.get('/countries/idioma/:idioma', async (req,res)=>{
    try{
        const countries = await req.db.find({
            idioma: { $regex: req.params.idioma, $options: 'i' }
        }).toArray();
        if (countries.length > 0) {
            res.json({countries});
        } else {
            res.status(404).json({error:'404 - idioma no encontrado'});
        }
    }catch{
        console.log('error al traer la colleccion de idioma');
    }finally{
        await disconnectToDb()
    }
})
//////////////////////

app.post('/countries', async (req, res) => {
  const resultado = validarCon(req.body)
  if (!resultado.success) return res.status(400)
    .json(resultado.error.message)

  try {
    await req.db.insertOne(resultado.data)
    res.status(201).json(resultado.data)
  } catch (error) {
    res.status(500).send('Error al agregar el pais')
  }
})

app.delete('/countries/:nombre', async (req, res) => {
  const { nombre } = req.params;
  try {
    const { deletedCount } = await req.db.deleteOne({ pais: { $regex: `^${nombre}$`, $options: 'i' } });
    res
      .status(deletedCount > 0 ? 200 : 404)
      .json(
        deletedCount > 0
          ? { message: 'País borrado con éxito' }
          : { message: 'País no encontrado para borrar' }
      );
  } catch (error) {
    res.status(500).send('Error al borrar el país');
  }
})
// // Modificar/Actualizar una peli
// app.patch('/peliculas/:id', async (req, res) => {
//   const resultado = validarPeliParcialmente(req.body)

//   if (!resultado.success) return res.status(400).json(resultado.error.details)

//   const { id } = req.params
//   const objectId = new ObjectId(id)

//   try {
//     const updateResult = await req.db.findOneAndUpdate(
//       { _id: objectId },
//       { $set: resultado.data },
//       { returnDocument: 'after' }
//     )

//     if (!updateResult) {
//       res.status(404).json({ message: 'Peli no encontrada para actualizar' })
//       return
//     }

//     res.json({
//       message: 'Peli actualizada con éxito',
//       updatedMovie: updateResult,
//     })
//   } catch (error) {
//     res.status(500).send('Error al actualizar la película')
//   }
// })

//////////////////////
app.listen(PORT, ()=>{
    console.log(`Ejecutandose en http://localhost:${PORT}`)
})