CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT(10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured boolean NOT NULL,
    date DATE,
    primary key(id)
);
