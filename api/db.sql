CREATE TABLE IF NOT EXISTS brands (
    id serial PRIMARY KEY,
    brand_name VARCHAR(105),
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS categories (
    id serial PRIMARY KEY,
    category_name VARCHAR(105),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
    id serial PRIMARY KEY,
    product_name VARCHAR,
    brand_id INT,
    FOREIGN KEY (brand_id) REFERENCES brands (id),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories (id),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS images (
    id serial PRIMARY KEY,
    url VARCHAR,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_images (
    id serial PRIMARY KEY,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products (id),
    image_id INT,
    FOREIGN KEY (image_id) REFERENCES images (id),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS colors (
    id serial PRIMARY KEY,
    color_name VARCHAR
);

ALTER TABLE products ADD COLUMN
color_id INT;

ALTER TABLE products
ADD CONSTRAINT fk_products_colors FOREIGN KEY (color_id) 
REFERENCES colors (id);

ALTER TABLE products ADD COLUMN
default_img VARCHAR;

CREATE TABLE IF NOT EXISTS photos (
    id serial PRIMARY KEY,
    url VARCHAR,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);