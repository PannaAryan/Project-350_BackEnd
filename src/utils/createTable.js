const pool = require("../pool");

const createTable = () => {
  // pool.query(
  //   "CREATE TABLE IF NOT EXISTS patients (UserID SERIAL PRIMARY KEY NOT NULL, Password VARCHAR(255) NOT NULL,Email VARCHAR(255) UNIQUE NOT NULL,FirstName VARCHAR(255) NOT NULL,LastName VARCHAR(255) NOT NULL,DateOfBirth DATE NOT NULL,PhoneNumber VARCHAR(15) NOT NULL)",
  //   (error) => {
  //     if (error) {
  //       console.log(`error occurred while creating patients table ${error}`);
  //     } else {
  //       console.log("patients table created");
  //     }
  //   }
  // );
  // pool.query(
  //   "CREATE TABLE IF NOT EXISTS Doctors (FullName VARCHAR(255), BMDC_reg VARCHAR(20) PRIMARY KEY NOT NULL, Specialization VARCHAR(255) NOT NULL, Email VARCHAR(255) UNIQUE NOT NULL, PhoneNumber VARCHAR(15) NOT NULL, Password VARCHAR(255) NOT NULL);",
  //   (error) => {
  //     if (error) {
  //       console.log(`error occurred while creating users table ${error}`);
  //     } else {
  //       console.log("patient table created");
  //     }
  //   }
  // );
  // pool.query(
  //   'DROP TABLE Doctors;'
  // )
};

module.exports = createTable;
