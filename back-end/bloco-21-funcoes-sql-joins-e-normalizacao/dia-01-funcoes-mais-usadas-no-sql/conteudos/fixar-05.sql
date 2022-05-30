-- 1. Monte um query que exiba:
-- -- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
-- -- A duração mínima dos filmes como 'Duração Mínima';
-- -- A duração máxima dos filmes como 'Duração Máxima';
-- -- A soma de todas as durações como 'Tempo de Exibição Total';
-- -- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT
	AVG(length) AS 'média de duração',
	MIN(length) AS 'duração mínima',
	MAX(length) AS 'duração máxima',
	SUM(length) AS 'soma de todas',
	COUNT(film_id) AS 'quantidade total'
FROM sakila.film;
