const express = require('express')

// Exporta todos los metodos desde controllers/user 
const controller = require('../controllers/stripe')

const router = express.Router()

/**
 * Ruta: /user GET
 */
router.post(
    `/`, 
    controller.stripeWebhook
)

module.exports = router