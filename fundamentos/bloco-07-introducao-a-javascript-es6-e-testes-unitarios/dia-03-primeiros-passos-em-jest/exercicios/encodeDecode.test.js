const {
  encode,
  decode,
} = require('./encodeDecode');

describe('4 - Para as funções encode e decode crie os seguintes testes em Jest:', () => {
  it('1. Teste se encode e decode são funções;', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
});