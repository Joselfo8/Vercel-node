const { default: mongoose } = require('mongoose')
const { default: Stripe } = require('stripe')
const { handleHttpError } = require('../utils/handleError.js')

const STRIPE_API_VERSION = '2022-11-15'
const STRIPE_SECRET_KEY = 'sk_test_51LKaEAATR7GdGLkc4i6xnMNGGjPnm6QnSt4NiLCJFWM3aQLUXPHVJNqOADyPjAmXr05o0pVIGVsckeotfJu9yxSr00awCEcsYt'

const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: STRIPE_API_VERSION
  })

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_731c32ddd516aeadf7516b5578a8de26f2e6d0ff6f6d6f242d66a533e9a0a4a0'

console.log('VARIABLE DE ENTORNO',STRIPE_WEBHOOK_SECRET);

exports.webhook = async (req, res) => {    
    try {
        const headers = await req.headers
        const body = await req.body
        console.log('LOG', body);
        res.send({
            msg: 'PRUEBA OPENPAY',
            body
        })
    } catch (error) {
        res.send({
            msj: 'ERROR STRIPE JLF2',
            error
        })
    }
}
