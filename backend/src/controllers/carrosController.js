const carrosModel = require('../models/carrosModel')

const getAll = async (_req, res) => {
  const carros = await carrosModel.getAll()

  return res.status(200).json(carros)
}

const createVeiculo = async (req, res) => {
  const createdVeiculo = await carrosModel.createVeiculo(req.body)

  return res.status(201).json(createdVeiculo)
}

const deleteVeiculo = async (req, res) => {
  const { id } = req.params

  await carrosModel.deleteVeiculo(id)
  return res.status(204).json()
}

const updateVeiculo = async (req, res) => {
  const { id } = req.params

  await carrosModel.updateVeiculo(id, req.body)

  return res.status(204).json()
}

module.exports = {
  getAll,
  createVeiculo,
  deleteVeiculo,
  updateVeiculo
}
