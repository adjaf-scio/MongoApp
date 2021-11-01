const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.signUp = async function(req, res) {
    let newUser = new User(req.body);

    let user = await newUser.save();

    return res.json({ user: user.userWithToken() });
}

exports.logIn = async function(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: 'Please provide credentials '});
    }

    User.findOne({ email: email }, async function(err, user) {
        if (err) return err;

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed. Invalid email or password.' });
        }

        const passwordFine = await user.comparePassword(password);

        if (!passwordFine) {
            return res.status(401).json({ message: 'Authentication failed. Invalid email or password.' });
        }

        return res.json({ user: user.userWithToken() }); 
    })
}

exports.getUser = async function(req, res, next) {
    if (req.user) {
        const user = await User.findById(req.user);
        return res.json({ user });
    } else {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
};

exports.updateUser = async function(req, res, next) {
    if (req.user) {
        const user = await User.findById(req.user);

        const { firstName, lastName } = req.body;

        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;

        await user.save();
        return res.json({ user });

    } else {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
}