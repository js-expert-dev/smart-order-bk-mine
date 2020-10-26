const { compareSync } = require("bcrypt");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategoryModel = new Schema({
    name:  { type: String, require: true},
    image: { type: String,require: true},
    isActive: { type: Boolean, require: true, default: true}
});

module.exports = mongoose.model('Category', CategoryModel);


