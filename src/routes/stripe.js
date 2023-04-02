const express = require('express')

// Exporta todos los metodos desde controllers/user 
const controller = require('../controllers/stripe')

const router = express.Router()

router.post(
    `/`, 
    controller.stripeWebhook
)

// router.post(
//     '/',
//     express.raw({
//         inflate: true,
//         limit: '50mb',
//         type: () => true
//     }), 
//     async (req, res) => {
//         console.log('RAWBODY', req.rawBody);
//     res.json({ bodySize: req.body });
// });

module.exports = router