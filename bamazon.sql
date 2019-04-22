CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price INTEGER(11),
    stock_quantity INTEGER(11),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ("shirt", "clothing", 5, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("shoes", "clothing", 10, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("pants", "clothing", 15, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("dress", "clothing", 20, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("skirt", "clothing", 25, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("sandals", "clothing", 30, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("watch", "jewelry", 35, 70);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("necklace", "jewelry", 40, 80);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("bracelet", "jewelry", 45, 90);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("ring", "jewlery", 50, 100);