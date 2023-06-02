require("dotenv").config()
const cors = require("cors")
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const initDB = require('./config/db_mongo.js')

// Initializations
const app = express()

// Settings
const port = process.env.PORT || 4000

const whiteList = [
    'http://localhost:4200',
    'https://video-tube-client.vercel.app/'
]

// Midlewaresserver 
app.use(cors({origin: whiteList})) // Para dar permisos a algunas URL's
app.use(morgan('dev'));
// app.use( // for parsing json
//     bodyParser.json(
//         // {
//         // limit: '20mb' // Limite de 20 megas por peticion
//         // }
//     )
// )
// app.use( // for parsing appication/x-www-form-urlencoded
//     bodyParser.urlencoded({
//         limit: '20mb', 
//         extended: true
//     })
// )
// app.use(
//     // bodyParser.raw({ type: 'application/json' })
//     bodyParser.raw()
// )
// app.use(express.json())
// app.use(bodyParser.raw({ type: 'application/json' }))

// app.use(bodyParser.json({
//     verify: (req, res, buf) => {
//       req.rawBody = buf
//     }
// }))

app.use(express.urlencoded({
    extended: true
  }))

  app.use(express.json());

// app.use(express.raw());

app.use("/", require("./src/routes/index")) // Muestra index

app.get("/", (req, res) => {
    res.send("Pagina de inicio JLF - Prueba inicial")
})

// Start the server
app.listen(port, () => {
    console.log(`La aplicacion esta corriendo en el puerto ${port}`);
})

initDB();
