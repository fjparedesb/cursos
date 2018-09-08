const mongoose = require('mongoose');
const validator = require('validator');

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
        minlenght: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{value} is not va valid email'
        }
    },
    password: {
        type: string,
        require: true,
        minlenght: 6
    },
    tokens: [{
        access: {
            type: string,
            required: true
        },
        tokens: {
            type: string,
            required: true
        }
    }]
});

module.exports = {User};