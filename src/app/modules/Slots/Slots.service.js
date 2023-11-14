const config = require("../../../config");
const pool = require("../../../pool");
const ApiError = require("../../../errors/ApiError");
var jwt = require("jsonwebtoken");

const createSlotsInDB = async (payload, docID) => {
  const {starting_time} =
    payload;

  const query =
    "INSERT INTO availableSlots (docID, starting_time) VALUES (?, ?)";
  const values = [
    docID,
    starting_time
  ];

  const [createdSlots] = await pool.promise().query(query, values);

  const selectQuery = "SELECT * FROM availableSlots WHERE slotID = ?";

  const selectValues = [createdSlots?.insertId];

  const [slot] = (await pool.promise().query(selectQuery, selectValues))[0];

  return slot;
};

const getAllSlotsFromDB = async (payload, docID) => {
  const {starting_time} =
    payload;

  const selectQuery = "SELECT * FROM availableSlots WHERE slotID = ?";

  const selectValues = [starting_time];
  
  const [slot] = (await pool.promise().query(selectQuery, selectValues));

  return slot;
};

const SlotsService = {
    createSlotsInDB,
    getAllSlotsFromDB,
};

module.exports = SlotsService;
