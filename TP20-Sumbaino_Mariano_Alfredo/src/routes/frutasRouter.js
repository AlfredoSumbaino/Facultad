const express= require('express')

const router = express.Router()

const frutasController = require('../controllers/frutasController')


router.get('/', frutasController.getMain)
router.get('/all', frutasController.getFrutas)
router.get('/:nombre', frutasController.getFrutasName)
router.get('/importe/:precio', frutasController.getFrutasPrecio)
router.post('/', frutasController.postFrutas)
router.delete('/:id', frutasController.deleteFrutas)
router.put('/:id', frutasController.updateFrutas)

module.exports = router