
const register = {
    get: (req, res) => {
        let message = req.session.message;
        req.session.message='';
        return res.render('register',{message:message});
    },
    post: (req, res) => {
        const username = req.body.username;
        const email = req.body.email;

        req.session.message = "no errors!";
        return res.redirect('register');
    }
};
module.exports = register;
