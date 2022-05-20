-- 1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT Provider, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';

-- 2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT Piece, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
-- ou
SELECT Provider, Providers.Name, Pieces.Name, Price FROM Provides
INNER JOIN Pieces ON Pieces.Code=Provides.Piece
INNER JOIN Providers ON Providers.Code=Provides.Provider
ORDER BY Price DESC LIMIT 5;

-- 3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
SELECT Providers.Name, Price FROM PiecesProviders.Provides
INNER JOIN Providers ON Providers.Code = Provider
ORDER BY Price DESC
LIMIT 4
OFFSET 2;

-- 4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
SELECT Pieces.Name AS 'Name Piece', Providers.Name AS 'Name Provider', Price FROM PiecesProviders.Provides
INNER JOIN Pieces ON Pieces.Code = Piece
INNER JOIN Providers ON Providers.Code = Provider
WHERE Provider = 'HAL'
ORDER BY Price DESC;

-- 5. Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(*) FROM PiecesProviders.Provides WHERE Piece = 1;
