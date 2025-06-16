const express= require('express')
const { connectToDb } = require('./src/mongodb')
const app = express()
const PORT = process.env.PORT || 3000

const frutasRoutes = require('./src/routes/frutasRouter')

app.use(express.json())
app.use(async (req, res, next) => {
    try {
        const client = await connectToDb();
        req.db = client.db('frutas').collection('frutas');
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error de conexión a la base de datos' });
    }
})

app.use('/frutas', frutasRoutes)
app.listen(PORT, ()=>{
    console.log(`Ejecutandose en http://localhost:${PORT}`)
})