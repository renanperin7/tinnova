const validateVeiculo = (req, res, next) => {
  const { body } = req

  if (body.veiculo === undefined) {
    return res.status(400).json({ message: 'The field "veiculo" is required' })
  }

  if (body.veiculo === null) {
    return res.status(400).json({ message: '"veiculo" cannot be empty' })
  }

  next()
}

const validateMarca = (req, res, next) => {
  const { body } = req

  if (body.marca === undefined) {
    return res.status(400).json({ message: 'The field "veiculo" is required' })
  }

  if (body.marca === null) {
    return res.status(400).json({ message: '"veiculo" cannot be empty' })
  }

  next()
}

module.exports = {
  validateVeiculo,
  validateMarca
}
