const User = require('../models/user');
const Medi = require('../models/medi')

module.exports = {

    alluser: async (req, res, next) => {
        const users = await User.find({});
        res.json(users);
    },

    oneuser: async (req, res, next) => {
        const user = await User.findById(req.params.id);
        res.json(user);
    },

    insertuser: async (req, res, next) => {
        const { name, password, tipo, coordenadas, image } = req.body;
        const user = new User ({ nombre: name, password, tipo, coordenadas, imageURL: image });
        
        user.password = await user.encryptPassword(user.password);

        await user.save();
        res.json({status: 'recivido'});
    },

    updateuser: async (req, res, next) => {
        const { nombre, password } = req.body;
        const newUser = { nombre, password };
        await User.findByIdAndUpdate(req.params.id, newUser, {useFindAndModify: false});
        res.json({status: 'Usuario Actualizado'})
    },

    deleteuser: async (req, res, next) => {
        await User.findByIdAndRemove(req.params.id);
        res.json({status: 'Usuario Eliminado'});
    },

    Busqueda: async (req, res, next) => {
        const userRegex = new RegExp(req.query.nombre, 'i')
        const users = await User.find({ "medicamentos.nombre": userRegex })
        res.json(users)
    }

    //allmedicsuser: async (req, res, next) => {
        //const { id } = req.params;
        //const user = await User.findById(id).populate('medics');
        //res.json(user);
    //},

    //insertmedicsuser: async (req, res, next) => {
        //const { id } = req.params;
        //const newmedi = new Medi(req.body);
        //const user = await User.findById(id);
        //newmedi.user = user;
        //await newmedi.save();
        //user.medics.push(newmedi);
        //await user.save();
        //res.json(newmedi);
    //}
};