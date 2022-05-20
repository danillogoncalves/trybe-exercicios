-- Para os exercícios a seguir, vamos usar a tabela sakila.film:
-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
-- Quantos filmes temos cadastrados?
SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

-- Para os exercícios a seguir, vamos usar a tabela sakila.actor:
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
-- Quantos sobrenomes únicos temos na tabela?
-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;

-- Usando a tabela language:
-- Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM sakila.language WHERE name != 'English';

-- Usando a tabela film:
-- Selecione todos os dados da tabela. Pronto, fez isso?
-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film ORDER BY length DESC, replacement_cost ASC LIMIT 20;
