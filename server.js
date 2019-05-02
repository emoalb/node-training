const app = require('./app');
const constants = require('./config/constans');
const http = require('http');
const data = require('./config/db');
const port = 3000;
const server = http.createServer(app);
data().then(
    () => {
        console.log(constants.CONSOLE_GREEN,"Connected to Database!");
        server.listen(port);
        console.log(constants.CONSOLE_WHITE,"Running on http://localhost:" + port);
    }).catch((err) => {
    console.log(err);
});

