const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URL; // Correct environment variable name
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});
const flightRouter = require("./routes/flight");
const hotelRouter = require("./routes/hotel");
const carhireRouter = require("./routes/carhire");
const userRouter = require("./routes/users");
const loginRouter = require("./routes/login");
app.use("/flight", flightRouter);
app.use("/hotel", hotelRouter);
app.use("/carhire", carhireRouter);
app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log("Server is running");
});
