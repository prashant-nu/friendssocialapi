const router = require("express").Router();
const User = require("../models/Users");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log("inside");
    let { username, email, password } = req.body;
    const user = await new User({
      username: username,
      email: email,
      password: password,
    });
    await user.save();
    res.send("data added");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
