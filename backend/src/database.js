const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI, process.env.PORT);
const DBATLAS = 'mongodb+srv://admin69:admin96@braniac.ra4nc.mongodb.net/ubimedbeta?retryWrites=true&w=majority'

//CONECCION A LA BASE DE DATOS DE MONGODB
mongoose.connect('mongodb://localhost/UbiMed', 
                { useNewUrlParser: true, 
                  useUnifiedTopology: true })
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));

//EXPORTANDO EL MODULO MONGOOSE A LA APLICACION 
module.exports = mongoose;