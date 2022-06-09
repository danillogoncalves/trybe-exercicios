const { expect } = require('chai');
const positiveNegativeNeutral = require('../src/positiveNegativeNeutral');

describe('Positivo, negativo e neutro', function() {
  describe('O que retorna', function() {
    it('Ao entrar com um número retorno um "string"', function() {
      const VALOR_DO_TESTE = 3;

      const result = positiveNegativeNeutral(VALOR_DO_TESTE);

      expect(result).to.be.a('string');
    });
  });
  describe('Resposta das inserções', function() {
    it('Retorno "Positivo", caso o número sejá maior que 0.', function() {
      const VALOR_DO_TESTE = 3;
      const RESPOSTA = 'positivo';
      const result = positiveNegativeNeutral(VALOR_DO_TESTE);

      expect(result).to.be.equals(RESPOSTA);
  
    });
  
    it('Retorno "negativo", caso o número sejá menor que 0.', function() {
      const VALOR_DO_TESTE = -5;
      const RESPOSTA = 'negativo';
      const result = positiveNegativeNeutral(VALOR_DO_TESTE);

      expect(result).to.be.equals(RESPOSTA);
    });
  
    it('Retorno "neutro", caso o número sejá 0.', function() {
      const VALOR_DO_TESTE = 0;
      const RESPOSTA = 'neutro';
      const result = positiveNegativeNeutral(VALOR_DO_TESTE);

      expect(result).to.be.equals(RESPOSTA);
    });
  });
  describe('Entra incorreta', function() {
    it('Retorne "o valor deve ser um número", caso não sejá um número.', function() {
      const VALOR_DO_TESTE = "dois";
      const RESPOSTA = 'o valor deve ser um número';
      const result = positiveNegativeNeutral(VALOR_DO_TESTE);

      expect(result).to.be.equals(RESPOSTA);
    });
  });
});