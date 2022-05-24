-- 1. Insira um novo funcionário na tabela sakila.staff.
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Danillo', 'Gonçalves', 10, 'Danillo.Gonçalves@sakilastaff.com', 2, 1,'Dani' , '123456789');

-- 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Sheila', 'Nakashima', 8, 'Sheila.Nakashima@sakilastaff.com', 2, 0,'Sheila' , 'jhsadgfhjashjdg1211djkhg'),
('Erik', 'Lima', 10, 'Erik.Lima@sakilastaff.com', 2, 1,'EkikSexy' , 'sdfkhhfosh5646465fsdf');

-- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name
FROM sakila.customer
LIMIT 5;

-- 4. Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name)
VALUES
('Biography'),
('Historic'),
('Fantasy');

-- 5. Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES
(4, 8);
