/* ADD A USER */
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

  /* LOGIN */