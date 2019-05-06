const PassportLocalStrategy = require('passport-local').Strategy;
const encryption = require('../utilities/encryption');
const User = require('../models/userSchema');
module.exports = new  PassportLocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: false,
        passReqToCallback: true
    }, (req, username, password, done )=> {
    User.findOne({username: username}).then(user => {
        if (user !== null) {
            const hashedPass = encryption.generateHashedPassword(user.salt, password);
            if (user.password === hashedPass) {
                req.session.user = user.username;
                req.session.messages.push(`Welcome ${req.session.user}!`);
                return done(null,user)
            } else {
                req.session.messages.push("Password don't match!");
                return done(null);
            }
        } else {
            req.session.messages.push("Wrong Credentials!");
            return done(null);
        }
    }).catch(err => {
        req.session.messages.push(err.message);
        return done(null);
    });
    }
);
