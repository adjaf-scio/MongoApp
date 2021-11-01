const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    icon: {
        type: String,
        default: 'home'
    }
});

mongoose.model('Group', GroupSchema);