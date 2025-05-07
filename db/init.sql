CREATE DATABASE IF NOT EXISTS miapp;
USE miapp;

CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  precio DECIMAL(10,2)
);

INSERT INTO productos (nombre, precio) VALUES
('Producto 1', 10.00),
('Producto 2', 20.00),
('Producto 3', 30.00);
