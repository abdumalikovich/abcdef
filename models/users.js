const mongoose = require('mongoose')

var Users = mongoose.Schema({
    name: {
        type: String,
        required: false,
        default: "Adam Adams"
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('Users', Users)
