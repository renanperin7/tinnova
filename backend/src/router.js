const express = require('express')
const carrosController = require('./controllers/carrosController')
const carrosMiddleware = require('./middlewares/carrosMiddlewares')

const router = express.Router()

router.get('/veiculos', carrosController.getAll)

router.get('/veiculos/:id', carrosController.getId)

router.post('/veiculos', carrosMiddleware.validateVeiculo, carrosController.createVeiculo)

router.delete('/veiculos/:id', carrosController.deleteVeiculo)

router.put('/veiculos/:id', carrosMiddleware.validateMarca, carrosController.updateVeiculo)

router.patch('/veiculos/:id', carrosController.patchVeiculo)

module.exports = router
