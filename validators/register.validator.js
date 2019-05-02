const {check, validationResult} = require('express-validator/check');
module.exports = {
    validatorFunction: async(req, res, next) =>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.messages = [];
        errors.array().forEach(e => req.session.messages.push(e.msg));
        return res.redirect('/auth/register');
    }
},
    optionsArray:[
        check('username').isLength({min:1}).withMessage('Empty user name field!'),
        check('email').isEmail().normalizeEmail().withMessage('Invalid email!'),
        check('password').isLength({min: 5,max:15}).withMessage('Password should be between 5 and 15 symbols long!')
    ]
};
