const { default: mongoose } = require('mongoose')
const { default: Stripe } = require('stripe')
const { handleHttpError } = require('../utils/handleError.js')

const STRIPE_API_VERSION = '2022-11-15'
const STRIPE_SECRET_KEY = 'sk_test_51LKaEAATR7GdGLkc4i6xnMNGGjPnm6QnSt4NiLCJFWM3aQLUXPHVJNqOADyPjAmXr05o0pVIGVsckeotfJu9yxSr00awCEcsYt'

const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: STRIPE_API_VERSION
  })
const STRIPE_WEBHOOK_SECRET = 'whsec_731c32ddd516aeadf7516b5578a8de26f2e6d0ff6f6d6f242d66a533e9a0a4a0'


exports.stripeWebhook = async (req, res) => {    
    try {
        // console.log('rawBody', req.rawBody);
        // console.log('rawHeaders', req.rawHeaders);
        const headers = await req.headers
        // const body = await req.body
        const body = await req.rawBody

        // console.log({
        //     msg: 'PRUEBA RAWBODY',
        //     body
        // });
        
        let data

        let eventType
        
        
        if (STRIPE_WEBHOOK_SECRET) {
            /**
             * Stripe signature
            */
            const signature = await headers['stripe-signature']

            console.log('PRUEBA FIRMA', {
                body,
                signature,
                STRIPE_WEBHOOK_SECRET
            });

            const event = stripe .webhooks.constructEvent(
                body,
                signature,
                STRIPE_WEBHOOK_SECRET
            )

            console.log('EVENTO EXITOSO', {event});

            // /**
            //  * The data is extracted according to event
            //  */
            // data = event.data
            
            // eventType = event.type
            // } else {
            // data = body.data
            // eventType = body.type
            // }

            
            // if (eventType === 'checkout.session.completed') {
                
            //     res.send('checkout.session.completed_successfuly')
            //     return
            // }

            // /**
            //  * Case: event of type invoice payment succeeded
            //  */
            // if (eventType === 'invoice.payment_succeeded') {
            //     res.send('invoice.payment_succeeded_successfuly')
            //     return
            // }

            res.send({
                msg: 'PRUEBA EXITOSA',
                evento: event
            })

            // res.send(body)
        }
    
    } catch (error) {
        res.send({
            msj: 'ERROR STRIPE JLF2',
            error
        })
    }
}
