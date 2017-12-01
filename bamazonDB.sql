-- Create Bamazon Database --
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name,
price, stock_quantity)
VALUES ("LA Kings Socks", "Clothing", 5.99, 10),
("Dog Bone", "Pets", 2.99, 20),
("Door knob", "Hardware", 12.00, 15),
("Lucky Charms Marshmallows", "Food and Drink", 8.59, 3),
("Surboard Wax", "Sports and Outdoors", 1.99, 50),
("Juicer", "Appliances", 100.00, 6),
("Chopino Margarita Mix", "Food and Drink", 9.99, 30),
("Kevin's Unbreakable Guitar Strings", "Music and Instruments", 12, 12),
("Goro Gumballs", "Food and Drink", 5.29, 100),
("Dill Pickles", "Food and Drink", 4.00, 50);

SELECT * FROM products ORDER BY id;

