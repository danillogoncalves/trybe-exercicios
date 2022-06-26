CREATE DATABASE IF NOT EXISTS cep_lookus;
USE cep_lookus;
CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL PRIMARY KEY,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL
);
INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
VALUES (
    "01001-000",
    "Praça da Sé",
    "Sé",
    "São Paulo",
    "SP"
  );