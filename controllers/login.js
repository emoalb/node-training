const login = {
    get: (req, res) => {
        let messages = req.session.messages;
        req.session.messages = [];
        return res.render('login', {messages:messages});
    }
};
module.exports = login;
