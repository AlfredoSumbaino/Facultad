const {connectToDb,disconnectToDb} = require('../mongodb');
//-----------Corregir
const { validarCon, validarConParcialmente } = require('../models/frutas');

async function getMain(req,res){
    res.status(200).json({message: "Servidor de frutas funcionando correctamente 🍎🍌🍇"});
}

async function getFrutas(req, res) {
    try{
        const frutas = await req.db.find().toArray()
        res.json ({frutas})
    }catch{
        console.log('error al traer la colleccion de frutas');
    }
}
async function getFrutasName(req, res) {
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
    }
}

async function getFrutasPrecio(req, res) {
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
    }
}
async function getNextId(collection) {
  const last = await collection.find().sort({ id: -1 }).limit(1).toArray();
  return last.length > 0 ? last[0].id + 1 : 1;
}

async function postFrutas(req, res) {
  const { nombre, precio, imagen } = req.query;
  if (typeof nombre === 'undefined' || typeof precio === 'undefined') {
    return res.status(400).json({ error: 'Faltan campos requeridos: nombre y precio.' });
  }
  try {
    const nextId = await getNextId(req.db);
    // Convertir precio a número
    const precioNum = Number(precio);
    if (isNaN(precioNum)) {
      return res.status(400).json({ error: 'El precio debe ser un número.' });
    }
    // Validar con el id generado
    const resultado = validarCon({ nombre, precio: precioNum, imagen, id: nextId });
    if (!resultado.success) return res.status(400)
      .json(resultado.error.message)
    const nuevaFruta = { nombre, precio: precioNum, imagen, id: nextId };
    await req.db.insertOne(nuevaFruta);
    res.status(201).json(nuevaFruta);
  } catch (error) {
    res.status(500).send('Error al agregar la fruta')
  }
}
async function deleteFrutas(req, res) {
  const { id } = req.params;
  try {
    const idNum = Number(id);
    if (isNaN(idNum)) {
      return res.status(400).json({ error: 'El id debe ser un número' });
    }
    const fruta = await req.db.findOne({ id: idNum });
    if (!fruta) {
      return res.status(404).json({ message: 'Fruta no encontrada para borrar' });
    }
    const { deletedCount } = await req.db.deleteOne({ id: idNum });
    res
      .status(deletedCount > 0 ? 200 : 404)
      .json(
        deletedCount > 0
          ? { message: 'Fruta borrada con éxito' }
          : { message: 'Fruta no encontrada para borrar' }
      );
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
}
async function updateFrutas(req, res) {
  const { id } = req.params;
  const idNum = Number(id);
  if (isNaN(idNum)) {
    return res.status(400).json({ error: 'El id debe ser un número' });
  }
  // Tomar los datos desde query string
  const updateFields = {};
  if (typeof req.query.nombre !== 'undefined') updateFields.nombre = req.query.nombre;
  if (typeof req.query.precio !== 'undefined') {
    const precioNum = Number(req.query.precio);
    if (isNaN(precioNum)) {
      return res.status(400).json({ error: 'El precio debe ser un número' });
    }
    updateFields.precio = precioNum;
  }
  if (typeof req.query.imagen !== 'undefined') updateFields.imagen = req.query.imagen;
  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({ error: 'No se enviaron campos para actualizar' });
  }
  try {
    const result = await req.db.findOneAndUpdate(
      { id: idNum },
      { $set: updateFields },
      { returnDocument: 'after' }
    );
    res.json({ message: 'Fruta actualizada con éxito', fruta: result.value });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
}


module.exports = {
    getFrutas,
    getMain,
    getFrutasPrecio,
    getFrutasName,
    postFrutas,
    deleteFrutas,
    updateFrutas,
    getNextId
}