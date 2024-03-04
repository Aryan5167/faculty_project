
const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
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
    },
    dept:{
        type: String,
        required: true
    },
    cabin:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    }
})

const AdminModel = mongoose.model('Admin', AdminSchema, 'admins')

module.exports = AdminModel
