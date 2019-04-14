const Login = require('../models/login.model.js');

// Create and Save a new Login
exports.create = (req, res) => {
    
    //Create login
    const auth = new Login({
        username: req.body.username,
        password: req.body.password 
    });

    auth.save()
    .then (data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the login."
        });
    });

};

// Retrieve and return all Login from the database.
exports.findAll = (req, res) => {

};

// Find a single Login with a LoginId
exports.findOne = (req, res) => {
    Login.find({username: req.params.name}).select('username password').exec (function(err, result){
        if (err) throw err
        
        res.json(result)
        //console.log(result);
    });
    
};

// Update a Login identified by the LoginId in the request
exports.update = (req, res) => {

};

// Delete a Login with the specified LoginId in the request
exports.delete = (req, res) => {

};