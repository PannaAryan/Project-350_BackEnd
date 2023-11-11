const config = require("../../../config");
const pool = require("../../../pool");
const ApiError = require("../../../errors/ApiError");
var jwt = require("jsonwebtoken");

const createSlotsInDB = async (payload) => {
  const { UslotIDserID, docID, starting_time, ending_time} =
    payload;

  const query =
    "INSERT INTO availableSlots ( slotID, docID, starting_time, ending_time) VALUES ( ?, ?,?, ?)";
  const values = [
    slotID, 
    docID,
    starting_time, 
    ending_time
  ];

  const [createdSlots] = await pool.promise().query(query, values);

  const selectQuery = "SELECT * FROM availableSlots WHERE slotID = ?";

  const selectValues = [createdSlots?.insertId];

  const [user] = (await pool.promise().query(selectQuery, selectValues))[0];

  return user;
};

const SlotsService = {
    createSlotsInDB,
};

module.exports = SlotsService;
