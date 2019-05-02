
const register = {
    get: (req, res) => {
        let messages = req.session.messages;
        req.session.messages=[];
        return res.render('register',{messages:messages});
    },
    post: (req, res) => {
        const username = req.body.username;
        const email = req.body.email;

        req.session.message = "no errors!";
        return res.redirect('register');
    }
};
module.exports = register;
