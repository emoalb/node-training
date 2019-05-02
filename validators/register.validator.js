const {validationResult} = require('express-validator/check');
module.exports = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.message='';
        errors.array().forEach(e=> req.session.message+=e.param +' '+ e.msg+'\n');
        return res.redirect('/auth/register');
    }
};
