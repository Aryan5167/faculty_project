const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MinorModel = require('./models/Minor')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/minor");

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    MinorModel.findOne({ email: email})
        .then((data) => {
            if (data) {
                if (data.password === password) {
                    res.json( "success" )
                } else {
                    res.json("Invalid password")
                }
            } else {
                res.json("User doesnt exist")
            }
        })
        .catch((err) => {
            res.json(err)
        })  
})

app.post('/register', (req, res) => {
    MinorModel.create(req.body)
        .then((register) => {
            res.json(register)
            // console.log(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})