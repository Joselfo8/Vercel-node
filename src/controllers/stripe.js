const { default: mongoose } = require('mongoose')
const { handleHttpError } = require('../utils/handleError.js')

exports.stripeWebhook = async (req, res) => {    
    try {
        console.log(req)
        return req
    } catch (error) {
        handleHttpError(res, "ERROR_STRIPE")
    }
}
