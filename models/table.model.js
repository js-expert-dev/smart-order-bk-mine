const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const tableSchema = new Schema({
    TableNo: { type: Number, required: true},
    HallNo: { type: Number, required: true},
    Size: { type: Number, required: true},
    CheckInCode:{ type: Number, required: true}

});
 module.exports = mongoose.model("Table",tableSchema)