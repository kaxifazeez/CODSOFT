const router = require("express").Router();
const carhire = require("../models/carhire-model");
router.route("/").get((req, res) => {
  carhire
    .find()
    .then((carhires) => res.json(carhires))
    .catch((err) => err.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const contact = req.body.contact;
  const classType = req.body.classType;
  const personCount = req.body.personCount;
  const pickupLocation = req.body.pickupLocation;
  const destination = req.body.destination;
  const newCarhire = new carhire({
    username,
    contact,
    classType,
    personCount,
    pickupLocation,
    destination,
  });
  newCarhire
    .save()
    .then(() => res.json("Car Hired Successfully"))
    .catch((err) => err.status(400).json("Error: " + err));
});
module.exports = router;
