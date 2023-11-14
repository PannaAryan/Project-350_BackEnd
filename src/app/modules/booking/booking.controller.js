const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const authService = require("./booking.service");

const createBooking = catchAsync(async (req, res) => {
  const bookingData = req.body;
  const user = req.verifiedUser;
  //console.log(user);

  const result = await authService.createBookingInDB(bookingData, user?.userID);


  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Booking created successfully",
    data: result,
  });
});


const bookingController = {
    createBooking,
    //getAllSlots,
};

module.exports = bookingController;