const Medi = require('../models/medi')

module.exports = {

    allmedi: async (req, res, next) => {
        const medics = await Medi.find({});
        res.json(medics);
    },

    insertmedi: async (req, res, next) => {
        const { nombre, prospecto, existencia, formafarma, laboratorio } = req.body;
        const medi = new Medi ({ nombre, prospecto, existencia, formafarma, laboratorio });
        await medi.save();
        res.json({status: 'recivido'});
    },
}