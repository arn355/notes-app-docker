const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost:27017/merndatabase';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
