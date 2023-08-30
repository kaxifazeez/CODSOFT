const mongoose = require("mongoose");
const schema = mongoose.Schema;
const flightSchema = new schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    contact: {
      type: String,
      required: true,
      minlength: 3,
    },
    departureCountry: {
      type: String,
      required: true,
    },
    arrivalCountry: {
      type: String,
      required: true,
    },
    departureDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
    adultsCount: {
      type: String,
      required: true,
    },
    childrenCount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
flightSchema.statics.searchByUsername = function (username) {
  return this.find({ username });
};

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
