const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const authService = require("./Slots.service");

const createSlots = catchAsync(async (req, res) => {
  const user = req.body;

  const result = await authService.createSlotsInDB(user);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Slot created successfully",
    data: result,
  });
});


const SlotsController = {
    createSlots,
};

module.exports = SlotsController;