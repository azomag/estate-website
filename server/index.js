const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ status: 'Login Successful', name: user.username, profilePic: user.profile_picture || 'default.jpg' });
        } else {
          res.json({ status: 'Incorrect Password', message: 'Incorrect Password' });
        }
      } else {
        res.json({ status: 'User Not Found', message: 'User Not Found' });
      }
    })
    .catch(err => {
      res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    });
});

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
