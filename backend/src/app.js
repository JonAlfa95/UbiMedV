const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

require('path');

//OBTENIENDO LA CONEXION A LA BASE DE DATOS
require('./database');

const app = express();

const clave = require('./config');

const routes = require('./routes/router');

//CONFIGURACIONES
//INICIALIZANDO LA VARIABLE DE ENCRIPTACION 
app.set('tokenSecreto', clave.secret);

//MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}))
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('imagen'));

//MODULO PARA PERMITIR LA CONEXION ENTRE 2 SERVIDORES
app.use(cors({origin: 'http://localhost:3000'}))

//RUTAS
app.use('/', routes);

module.exports = app