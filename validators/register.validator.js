module.exports = {

    validatorFunction: async (req, res, next) => {
        req.checkBody('username').isLength({min: 1}).withMessage('Empty user name field!');
        req.checkBody('email').isEmail().normalizeEmail().withMessage('Invalid email!');
        req.checkBody('password').isLength({
            min: 5,
            max: 15
        }).withMessage('Password should be between 5 and 15 symbols long!');
        let repeatPassword = req.body.repeatPassword;
        let password = req.body.password;
        req.session.messages = [];
        const errors = req.validationErrors();
        if (errors) {
            errors.forEach(e => req.session.messages.push(e.msg));
            return res.redirect('/auth/register');
        }
        if(password!==repeatPassword){
            req.session.messages.push('Passwords should match!');
            return res.redirect('/auth/register');
        }
        next();
    }

};
