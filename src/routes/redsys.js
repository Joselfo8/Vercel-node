const express = require('express')
let multer = require('multer');
let upload = multer();

// Exporta todos los metodos desde controllers/user 
const controller = require('../controllers/redsys')

const router = express.Router()

// router.post(
//     `/:id`, 
//     controller.webhook
// )

router.post('/:id', upload.fields([]), (req, res) => {
    console.log( 'BODY', req.body );
    console.log( 'FILES', req.files );
    res.sendStatus(200);
});

module.exports = router