let mongoose = require('mongoose');

let Author = require('./author');
let Book = require('./book');

mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
    console.log('Successfully Connected');
});