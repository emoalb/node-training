const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
const connectionString = 'mongodb://localhost:27017/nodeTraining';

let data = async () => {

    await mongoose.connect(connectionString, {useNewUrlParser: true})

};

module.exports = data;
