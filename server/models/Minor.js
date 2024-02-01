const mongoose = require('mongoose')

const MinorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const MinorModel = mongoose.model('register', MinorSchema)

module.exports = MinorModel