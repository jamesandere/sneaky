const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./db/connection");
const brands = require("./routes/brands");
const products = require("./routes/products");
const colors = require("./routes/colors");

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "100mb",
    extended: true,
  })
);

app.use("/api/brands", brands);
app.use("/api/products", products);
app.use("/api/colors", colors);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

pool
  .connect()
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((error) => {
    console.log(error);
  });
