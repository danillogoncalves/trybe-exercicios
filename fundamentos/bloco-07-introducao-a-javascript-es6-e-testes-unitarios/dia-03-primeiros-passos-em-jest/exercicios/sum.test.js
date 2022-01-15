const { it, expect } = require('@jest/globals');
const sum = require('./sum');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('Teste se o retorno de sum(4, 5) é 9', ()=> {
    expect(sum(4, 5)).toBe(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
});
