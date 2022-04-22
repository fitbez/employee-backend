const router = require("express").Router();
const Employee = require("../models/employee");

/* ADD EMPLOYEE */
router.post("/addemployee", async (req, res) => {
  const newEmployee = new Employee({
    image: req.body.image,
    name: req.body.name,
    occupation: req.body.occupation,
    callOffice: req.body.callOffice,
    callMobile: req.body.callMobile,
    sms: req.body.sms,
    email: req.body.email,
  });
  try {
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET ALL EMPLOYEES */
router.get("/allemployees", async (req, res) => {
  try {
    const result = await Employee.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO
/* GET AN EMPLOYEE */

/* DELETE AN EMPLOYEE */
router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("The employee has been deleted...");
    console.log(req.headers);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* UPDATE AN EMPLOYEE */
router.put("/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findOneAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
    console.log("updated employee", updatedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
