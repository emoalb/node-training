const PassportLocalStrategy = require('passport-local').Strategy;
const User = require('../models/userSchema');
const encryption = require('../utilities/encryption');

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    console.log(email);
    const user = {
        email: email.trim(),
        password: password.trim(),
        username: req.body.username.trim()
    };

    User
        .find({email: email})
        .then(users => {
            if (users.length > 0) {
                req.session.messages.push("User exists");
                return done(null);
            }
            user.salt = encryption.generateSalt();
            user.password = encryption.generateHashedPassword(user.salt, user.password);
            user.roles = [];
            User
                .create(user)
                .then(() => {
                req.session.messages.push('User created!');
                return done(null,user);
            })
                .catch((err) => {
                    req.session.messages.push(err.message.toString());
                    return done(null)
                })
        })
});
