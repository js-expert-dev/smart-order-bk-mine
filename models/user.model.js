const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModel = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, default: false, required: true}
});

module.exports = mongoose.model('User', UserModel);
