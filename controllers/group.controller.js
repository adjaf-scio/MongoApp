const mongoose = require('mongoose');
const Group = mongoose.model('Group');

exports.getAll = async function(req, res) {
    // TODO: Obtener todos los grupos

    return res.json({ groups });
}

exports.getGroup = async function(req, res) {
    const  { id } = req.params;
    // TODO: Obtener grupo por id

    return res.json({ group });
}

exports.createGroup = async function(req, res) {
    const { body } = req;

    // TODO: Crear un grupo

    return res.json({ group });
}

exports.updateGroup = async function(req, res) {
    const { id } = req.params;

    const { body } = req;

    // TODO: Actualizar datos de un grupo (name, color, icon)

    return res.json({ group });
}

exports.deleteGroup = async function(req, res) {
    const  { id } = req.params;
    // TODO: Borrar grupo por id 
    // (recordar eliminar el grupo de los usuarios que lo tengan)

    return res.status(204);
}




