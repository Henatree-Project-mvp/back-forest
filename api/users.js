const express = require("express");
const router = express.Router();

const { users } = require("../models");

router.get("/api/users", async (req, res) => {
  try {
    const userList = await users.find();
    res.json(userList);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
