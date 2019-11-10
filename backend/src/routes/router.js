const router = require('express-promise-router')();

const { index } = require('../controllers/indexCtrl');
const { admin } = require('../controllers/adminCtrl');

const { login } = require('../middlewares/login');
const { veryjwt } = require('../middlewares/veryjwt');

const { alluser, oneuser, insertuser, updateuser, deleteuser } = require('../controllers/userCtrl');

const { allmedi, insertmedi } = require('../controllers/mediCtrl')

//RUTA COMPROBACION
router.post('/login', login)

//RUTAS USUARIOS
router.get('/users', alluser);
router.get('/users/:id', veryjwt, oneuser);
router.post('/users', insertuser);
router.put('/users/:id', veryjwt, updateuser);
router.delete('/users/:id', veryjwt, deleteuser);

//RUTAS MEDICAMENTOS
router.get('/medicamentos', allmedi)
router.post('/medicamentos', insertmedi)

module.exports = router;