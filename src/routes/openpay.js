const express = require('express')

// Exporta todos los metodos desde controllers/user 
const controller = require('../controllers/openpay')

const router = express.Router()

router.post(
    `/`, 
    controller.webhook
)

module.exports = router