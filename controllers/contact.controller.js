const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');


exports.createContact = async function (req, res) {
    /* 
     *   FORMA 1 - create con await
    const contact =  await Contact.create(req.body);

    return res.json({ contact });
    */

    /*
     * FORMA 2 - create con callback
     *
    Contact.create(req.body, function(err, contact) {
        if (err) {
            return res.status(422).json({ err });
        }

        if (!contact) {
            return res.status(422);
        }

        if (contact) {
            return res.json({ contact });
        }
    });
    */

    /*
     * FORMA 3 - create con promise
    Contact.create(req.body)
        .then(function(contact) {
            return res.json({ contact });
        })
        .catch(function(err){
            return res.json({ err });
        })
    */

    /*
     * FORMA 4 - construir modelo y guardar despues
    */
    const contact = new Contact(req.body);
    await contact.save();
    

    return res.json({ contact });
}

exports.getAll = async function (req, res) {
    const contacts = await Contact.find();

    return res.json({ contacts });
}

exports.findOne = async function (req, res) {
    const contact = await Contact.findById(req.params.id).populate('groups');
    
    return res.json({ contact });
}

exports.updateContact = async function(req, res) {
    const id = req.params.id;
    const { body } = req;
    
    // TODO: Implementar update de un contacto (sin actualizar grupos)

    return res.json ({ contact });
}

exports.updateContactGroups = async function(req, res) {
    const id = req.params.id;
    const { groupIds } = req.body;

    // TODO: Se recibe un arreglo de Ids de Grupos, se deben actualizar en el contacto

    return res.json({ contact });
}

exports.searchContact = async function (req, res) {
    const { value } = req.params;

    const query = {
        $or: [
            { name: { $regex: value, $options: 'i' } },
            { phone: { $regex: value } },
            { email: { $regex: value, $options: 'i' } }
        ]
    };

    const contacts = await Contact.find(query).populate('groups');

    return res.json({contacts})
}


exports.deleteContact = async function (req, res) {
    const { id } = req.params;

    // TODO: Implementar borrar el contacto por Id

    return res.status(204);
}