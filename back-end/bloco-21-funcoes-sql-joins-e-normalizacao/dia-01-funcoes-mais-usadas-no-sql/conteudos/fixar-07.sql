-- 1. Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating
HAVING AVG(length) BETWEEN 115.0 AND 121.50;

-- 2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) AS soma_custo_substituicao
FROM sakila.film
GROUP by rating
HAVING soma_custo_substituicao > 3950.50
ORDER BY soma_custo_substituicao ASC;
