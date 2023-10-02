const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Project_Management',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Failed to cnnect with db');
});

db.once('open', () => {
    console.log('Connected with db');
});