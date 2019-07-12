const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const User = new Schema({
  _id: {
    type: String,
    required: true
  },
  actions: {
    type: Array,
    required: true
  }

});


module.exports = mongoose.model("Users", User);