var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
       type: String,
       required: true,
       trim: true,
       minlenght: 1
    },
    age: {
       type: Number,
       required: true,
       default: 0
    },
    location: {
       type: String,
       trim: true,
       minlenght: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlenght: 1
    }
});

module.exports = {User};