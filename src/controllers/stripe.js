const { default: mongoose } = require('mongoose')
const { handleHttpError } = require('../utils/handleError.js')

exports.stripeWebhook = async (req, res) => {    
    try {
        const headers = await req.headers
        const body = await req.body
        // console.log({headers, body})
        res.send({headers, body})
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_STRIPE")
    }
}
