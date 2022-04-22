const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  callOffice: {
    type: String,
    required: true,
  },
  callMobile: {
    type: String,
    required: true,
  },
  sms: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
