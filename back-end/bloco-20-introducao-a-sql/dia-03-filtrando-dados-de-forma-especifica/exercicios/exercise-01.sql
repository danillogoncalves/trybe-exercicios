-- 1. Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'gr%';

-- 2. Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor ASC;

-- 3. Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
SELECT Pecas.name AS Name, Fornecedor, Preco FROM PecasFornecedores.Fornecimentos
INNER JOIN Pecas ON peca = Pecas.code
WHERE Fornecedor LIKE '%N%';

-- 4. Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name ASC;

-- 5. Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';

-- 6. Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 16 AND 39
ORDER BY Preco ASC;

-- 7. Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
SELECT * FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
