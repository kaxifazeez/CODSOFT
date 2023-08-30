const router = require("express").Router();
const flight = require("../models/flight-model");
router.route("/").get((req, res) => {
  flight
    .find()
    .then((flights) => res.json(flights))
    .catch((err) => err.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const contact = req.body.contact;
  const departureCountry = req.body.departureCountry;
  const arrivalCountry = req.body.arrivalCountry;
  const departureDate = req.body.departureDate;
  const returnDate = req.body.returnDate;
  const adultsCount = req.body.adultsCount;
  const childrenCount = req.body.childrenCount;
  const newFlight = new flight({
    username,
    contact,
    departureCountry,
    arrivalCountry,
    departureDate,
    returnDate,
    adultsCount,
    childrenCount,
  });
  newFlight
    .save()
    .then(() => res.json("Flight Added Successfully"))
    .catch((err) => err.status(400).json("Error: " + err));
});
router.route("/search/:username").get((req, res) => {
  const username = req.params.username;
  flight
    .searchByUsername(username)
    .then((flights) => res.json(flights))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
