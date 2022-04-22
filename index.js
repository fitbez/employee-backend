const express = require("express");
const mongoose = require("mongoose");
const employeeRouter = require("./routes/employee");
const userRouter = require("./routes/auth");
require("dotenv").config();
const cors = require("cors");

const app = express();

//connecting our app to our database (MogoDB atlas)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api/employees", employeeRouter);
app.use("/api/user", userRouter);

const PORT = 5000;

// setting up our server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
