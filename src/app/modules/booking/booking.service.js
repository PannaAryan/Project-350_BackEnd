const config = require("../../../config");
const pool = require("../../../pool");
const ApiError = require("../../../errors/ApiError");
var jwt = require("jsonwebtoken");

const createBookingInDB = async (payload, docID) => {
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

const bookingService = {
    createBookingInDB,
    //getAllSlotsFromDB,
};

module.exports = bookingService;
