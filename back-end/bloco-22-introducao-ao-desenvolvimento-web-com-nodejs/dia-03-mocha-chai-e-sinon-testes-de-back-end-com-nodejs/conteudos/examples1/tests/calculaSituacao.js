const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovacao"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovacao');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "aprovacao"', () => {
    const resposta = calculaSituacao(9);

    expect(resposta).equals('aprovacao');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "aprovacao"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).equals('aprovacao');
  });
});