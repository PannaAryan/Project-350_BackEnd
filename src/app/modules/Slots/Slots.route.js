const express = require("express");
const SlotsController = require("./ Slots.controller");
const verifyAuthToken = require("../../middlewares/verifyAuthToken");

const router = express.Router();

router.post("/",verifyAuthToken, SlotsController.createSlots);
router.get("/", verifyAuthToken, SlotsController.getAllSlots);



const SlotsRoutes = router;
module.exports = SlotsRoutes;
