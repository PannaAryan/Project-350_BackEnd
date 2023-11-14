const express = require("express");
const bookingController = require("./booking.controller");
const verifyAuthToken = require("../../middlewares/verifyAuthToken");

const router = express.Router();

router.post("/",verifyAuthToken, bookingController.createBooking);



const bookingRoutes = router;
module.exports = bookingRoutes;
