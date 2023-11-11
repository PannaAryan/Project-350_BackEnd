const express = require("express");
const SlotsController = require("./Slots.controller");

const router = express.Router();

router.post("/create", SlotsController.createSlots);



const SlotsRoutes = router;
module.exports = SlotsRoutes;
