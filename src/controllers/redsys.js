const { default: mongoose } = require('mongoose')





exports.webhook = async (req, res) => {    
    try {
        
        // const headers = await req.headers
        const body = await req.body
        const query = await req.query
        const params = await req.params
        const raw = await req.raw
        const form = await req.formdata
        // const formData = await req.formData();

        console.log('LOG', {
            msg: 'RAW REDSYS',
            res: {
                body,
                query,
                params,
                form
            }
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
