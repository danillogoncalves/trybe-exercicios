-- 1. Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW".
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

-- 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- Tem ON DELETE - address, city, film, film_actor, film_category, inventory, payment, rental, sfaff e store

-- 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).