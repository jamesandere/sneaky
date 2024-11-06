const pool = require("../db/connection");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { brand_name } = req.body;

  try {
    const newBrand = await pool.query(
      `INSERT INTO brands (brand_name) VALUES ($1) RETURNING *`,
      [brand_name]
    );
    res.status(200).json(newBrand.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Could not add brand!",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const brands = await pool.query(`SELECT id, brand_name FROM brands`);
    res.status(200).json(brands.rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
