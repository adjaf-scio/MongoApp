const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const validator = require('validator');
const moment = require('moment');

const config = require('../config/index');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please use a valid email address"],
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}, { timestamps: true, _id: true });


UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(config.SALT_FACTOR, function(err, salt) {
        if (err) return next(err);
    
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
    
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateJWT = function() {
    var payload = {
        sub: this._id,
        iat: moment().unix(),
        exp: moment().add(14, "days").unix(),
    };
    return jwt.encode(payload, config.JWT_SECRET);
}

UserSchema.methods.userWithToken = function() {
    return {
        id: this._id,
        email: this.email,
        fullName: this.fullName,
        token: this.generateJWT()
    };
}

UserSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
});

mongoose.model('User', UserSchema);