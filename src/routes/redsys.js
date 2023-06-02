const express = require('express')

// Exporta todos los metodos desde controllers/user 
const controller = require('../controllers/redsys')

const router = express.Router()

router.post(
    `/:id`, 
    controller.webhook
)

module.exports = router