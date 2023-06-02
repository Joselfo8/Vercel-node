const { default: mongoose } = require('mongoose')

exports.webhook = async (req, res) => {    
    try {
        // const headers = await req.headers
        const body = await req.body
        const query = await req.query
        const params = await req.params

        console.log('LOG', {
            msg: 'RAW REDSYS',
            // res: {
            //     // body,
            //     // query,
            //     // params
            // }
            req
        });
        
        res.send({
            msg: 'PRUEBA REDSYS',
            res: {
                body,
                query,
                params
            }
        })
    } catch (error) {
        res.send({
            msj: 'ERROR REDSYS JLF2',
            error
        })
    }
}
