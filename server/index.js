// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const MinorModel = require('./models/Minor')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/minor");

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     MinorModel.findOne({ email: email})
//         .then((data) => {
//             if (data) {
//                 if (data.password === password) {
//                     res.json( "success" )
//                 } else {
//                     res.json("Invalid password")
//                 }
//             } else {
//                 res.json("User doesnt exist")
//             }
//         })
//         .catch((err) => {
//             res.json(err)
//         })  
// })

// app.post('/register', (req, res) => {
//     MinorModel.create(req.body)
//         .then((register) => {
//             res.json(register)
//             // console.log(data)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// })

// app.listen(3001, () => {
//     console.log("server is running on port 3001")
// })


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
const AdminModel = require('./models/Admin');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/minor");

// Login endpoint for users
app.post('/user/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("Invalid password");
                }
            } else {
                res.json("User doesn't exist");
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

// Login endpoint for admins
app.post('/admin/login', (req, res) => {
    const { email, password } = req.body;
    AdminModel.findOne({ email: email })
        .then((admin) => {
            if (admin) {
                if (admin.password === password) {
                    res.json("success");
                } else {
                    res.json("Invalid password");
                }
            } else {
                res.json("Admin doesn't exist");
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

// Registration endpoint for users
app.post('/user/register', (req, res) => {
    UserModel.create(req.body)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Registration endpoint for admins
app.post('/admin/register', (req, res) => {
    AdminModel.create(req.body)
        .then((admin) => {
            res.json(admin);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

