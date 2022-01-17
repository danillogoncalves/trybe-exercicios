const { it, expect } = require('@jest/globals');
const {
  encode,
  decode,
} = require('./encodeDecode');

describe('4 - Para as funções encode e decode crie os seguintes testes em Jest:', () => {
  it('1. Teste se encode e decode são funções;', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('3. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('4. Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('sdfghjkl12345')).toBe('sdfghjkl12345');
    expect(decode('789aeiou')).toBe('789aeiou');
  });
  it('5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect('Danillo'.length).toBe(encode('Danillo').length);
    expect(decode('Danillo').length).toBe('Danillo'.length);
  });
});