const connection = require('./connection')

const getAll = async () => {
  const [carros] = await connection.execute('SELECT * FROM carros')
  return carros
}

const createVeiculo = async (carro) => {
  const { veiculo, marca, ano, descricao, vendido, created, updated } = carro

  const query = 'INSERT INTO carros(veiculo, marca, ano, descricao, vendido, created, updated) VALUES (?, ?, ?, ?, ?, ?, ?)'

  const [createdVeiculo] = await connection.execute(query, [veiculo, marca, ano, descricao, vendido, created, updated])

  return createdVeiculo
}

const deleteVeiculo = async (id) => {
  const [removedVeiculo] = await connection.execute('DELETE FROM carros WHERE id = ?', [id])

  return removedVeiculo
}

const updateVeiculo = async (id, carro) => {
  const { veiculo, marca, ano, descricao, vendido, created, updated } = carro

  const query = 'UPDATE carros SET veiculo = ?, marca = ?, ano = ?, descricao = ?, vendido = ?, created = ?, updated = ? WHERE id = ?'

  const [updatedVeiculo] = await connection.execute(query, [veiculo, marca, ano, descricao, vendido, created, updated, id])

  return updatedVeiculo
}

const patchVeiculo = async (id, carro) => {
  const { veiculo, marca, ano, descricao, vendido, created, updated } = carro

  const query = 'UPDATE carros SET veiculo = ?, marca = ?, ano = ?, descricao = ?, vendido = ?, created = ?, updated = ? WHERE id = ?'

  const [patchedVeiculo] = await connection.execute(query, [veiculo, marca, ano, descricao, vendido, created, updated, id])

  return patchedVeiculo
}

module.exports = {
  getAll,
  createVeiculo,
  deleteVeiculo,
  updateVeiculo,
  patchVeiculo
}
