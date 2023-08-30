const mongoose = require("mongoose");
const schema = mongoose.Schema;
const carhireSchema = new schema(
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
    pickupLocation: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Carhire = mongoose.model("Carhire", carhireSchema);
module.exports = Carhire;
