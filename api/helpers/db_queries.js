const pool = require("../db/connection");

const getProduct = async (id) => {
  const { rows: product } = await pool.query(
    `SELECT * FROM products p JOIN colors c
    ON  p.color_id= c.id WHERE p.id = $1`,
    [id]
  );
  return product[0];
};

const getProductBrand = async (id) => {
  const { rows: brand } = await pool.query(`
  SELECT b.id, brand_name FROM brands b JOIN products p
  ON brand_id = p.brand_id
  `);
  return brand[0];
};

const getProductImages = async (id) => {
  const { rows: images } = await pool.query(
    `SELECT url FROM photos ph JOIN products p
          ON ph.product_id = p.id
          WHERE p.id = $1`,
    [id]
  );
  return images;
};

module.exports = { getProduct, getProductImages, getProductBrand };
