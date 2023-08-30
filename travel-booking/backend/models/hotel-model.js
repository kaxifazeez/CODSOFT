const mongoose = require("mongoose");
const schema = mongoose.Schema;
const hotelSchema = new schema(
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
    },
    classType: {
      type: String,
      required: true,
    },
    personCount: {
        type: String,
        required: true,
      },
    checkinDate: {
      type: String,
      required: true,
    },
    checkoutDate: {
      type: Date,
      required: true,
    },
  

  },
  { timestamps: true }
);
const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
