const router = require("express").Router();
const pool = require("../db/connection");

router.get("/", async (req, res) => {
  try {
    const colors = await pool.query(`SELECT * FROM colors`);
    res.status(200).json(colors.rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
