const router = require("express").Router();
const hotel = require("../models/hotel-model");

router.route("/").get((req, res) => {
  hotel
    .find()
    .then((hotels) => res.json(hotels))
    .catch((err) => res.status(400).json("Error: " + err)); // Use res.status() and res.json()
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const contact = req.body.contact;
  const classType = req.body.classType;
  const personCount = req.body.personCount;
  const checkinDate = req.body.checkinDate;
  const checkoutDate = req.body.checkoutDate;
  const newHotel = new hotel({
    username,
    contact,
    classType,
    personCount,
    checkinDate,
    checkoutDate,
  });
  newHotel
    .save()
    .then(() => res.json("Hotel Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err)); // Use res.status() and res.json()
});

module.exports = router;
