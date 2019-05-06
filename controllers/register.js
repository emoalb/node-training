const register = {
    get: (req, res) => {
        let messages = req.session.messages;
        req.session.messages = [];
        return res.render('register', {messages: messages});
    }
};
module.exports = register;
