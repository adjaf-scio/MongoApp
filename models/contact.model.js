const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    address: {
        street: {
            type: String
        },
        number: {
            type: String
        },
        district: {
            type: String
        },
        zipCode: {
            type: Number
        }
    },
    email: {
        type: String,
        required: false
    },
    image: {
        type: String,
        default: 'https://operations.chicagopolice.org/FIMSPublic/Content/images/default-contact-image.png'
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    }]
});

ContactSchema.virtual('fullAddress').get(function () {
    return this.address.street + ' #' + this.address.number + '\n' + this.district + '\nZip Code ' + this.address.zipCode; 
});

mongoose.model('Contact', ContactSchema);