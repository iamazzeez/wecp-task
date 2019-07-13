const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Events = new Schema({
  userId: {
    type: Number,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  image: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: () =>  Date.now()
  }

});


module.exports = mongoose.model("Events", Events);