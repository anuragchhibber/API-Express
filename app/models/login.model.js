const mongoose = require('mongoose')

var Schema = mongoose.Schema;

const LoginSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('login', LoginSchema);