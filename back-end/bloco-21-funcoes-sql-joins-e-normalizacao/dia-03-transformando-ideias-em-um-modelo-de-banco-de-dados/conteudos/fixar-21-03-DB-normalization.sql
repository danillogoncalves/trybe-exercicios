CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionarios (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(15),
    data_cadastro TIMESTAMP
) ENGINE = InnoDB;

CREATE TABLE setores (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    setor VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE setores_funcionarios (
	funcionarios_id INT NOT NULL,
    setores_id INT NOT NULL,
    FOREIGN KEY (funcionarios_id) REFERENCES funcionarios(id),
    FOREIGN KEY (setores_id) REFERENCES setores(id),
    CONSTRAINT PRIMARY KEY (funcionarios_id, setores_id)
) ENGINE = InnoDB;

INSERT INTO funcionarios (id, nome, sobrenome, email, telefone, data_cadastro)
VALUES
(12, 'Joseph', 'Rodrigues',	'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
(13, 'André', 'Freeman','andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO setores (setor)
VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO setores_funcionarios (setores_id, funcionarios_id)
VALUES
(1, 12),
(2, 12),
(3, 13),
(4, 14),
(2, 14),
(5, 15);
