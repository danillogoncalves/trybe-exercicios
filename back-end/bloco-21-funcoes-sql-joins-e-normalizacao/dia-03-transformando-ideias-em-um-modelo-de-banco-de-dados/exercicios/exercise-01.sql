CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE locations (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    location VARCHAR(100)
) ENGINE = InnoDB;

CREATE TABLE animals (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    species VARCHAR(50) NOT NULL,
    sex VARCHAR(50) NOT NULL,
    age INT,
    location_id INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES locations (id)
) ENGINE = InnoDB;

CREATE TABLE managers (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE employees (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES managers (id)
) ENGINE = InnoDB;

CREATE TABLE animals_employees (
	animal_id INT NOT NULL,
    employee_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animals (id),
    FOREIGN KEY (employee_id) REFERENCES employees (id),
    CONSTRAINT PRIMARY KEY (animal_id, employee_id)
) ENGINE = InnoDB;
