const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('express-handlebars');
const expressSession = require('express-session');

const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/main')

const app = express();
const title = "node.js training session";
const rootFolder = path.normalize(__dirname);
app.set('views', path.join(rootFolder, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: rootFolder + '/views/layouts/',
    helpers: {
        title: title
    },
    partialsDir: rootFolder + '/views/partials/'
}));

app.use(expressSession({
    secret: 'NUCLEAR_SECRET',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootFolder, 'public')));
app.use(express.static(path.join(rootFolder, 'node_modules/jquery')));
app.use('/auth', authRoutes);
app.use('/', homeRoutes);
module.exports = app;
