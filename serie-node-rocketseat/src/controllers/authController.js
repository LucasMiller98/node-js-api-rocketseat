const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {
  try { // cria um user quando a rota for acessada
    const user = await User.create(req.body)

    return res.send({ user })
  } catch (err) { // para erros
    return res.status(400).send({ error: 'Registragion failed' })
  }
})

module.exports = app => app.use('/auth', router)

// req => todos os parametros estarão aqui