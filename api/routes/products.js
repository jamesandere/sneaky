const pool = require("../db/connection");
const {
  getProduct,
  getProductImages,
  getProductBrand,
} = require("../helpers/db_queries");
const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");

router.post("/", async (req, res) => {
  const { product_name, description, brand_id, category_id, color_id, images } =
    req.body;

  let imagesBuffer = [];
  // try {
  //   const product = await pool.query(
  //     `INSERT INTO products (product_name, brand_id, color_id, description)
  //       VALUES ($1, $2, $3, $4) RETURNING *`,
  //     [product_name, brand_id, color_id, description]
  //   );
  //   addImages(product.rows[0].id);
  //   res.status(200).json(product.rows[0]);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json("Could not add product.");
  // }

  await pool.query(
    `INSERT INTO products (product_name, brand_id, color_id, description) VALUES ($1, $2, $3, $4) RETURNING *`,
    [product_name, brand_id, color_id, description],
    async (err, result) => {
      if (!err) {
        res.status(201).json(result.rows);
        addImages(result.rows[0].id);
      } else {
        console.log(err);
        res.status(500).json("Could not add product.");
      }
    }
  );

  const addImages = async (product_id) => {
    if (images) {
      for (let i = 0; i < images.length; i++) {
        const uploadRes = await cloudinary.uploader.upload(images[i], {
          upload_preset: "sneaky",
        });
        imagesBuffer.push(uploadRes);

        if (uploadRes) {
          await pool.query(
            `INSERT INTO photos (url, product_id) VALUES ($1, $2) RETURNING *`,
            [uploadRes.url, product_id]
          );
        }
      }
    }
  };
});

router.get("/:id", async (req, res) => {
  const images = await getProductImages(req.params.id);
  const brand = await getProductBrand(req.params.id);
  try {
    const product = await getProduct(req.params.id);
    res.status(200).json({ ...product, brand, images });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await pool.query(`SELECT * FROM products`);
    res.status(200).json(products.rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
