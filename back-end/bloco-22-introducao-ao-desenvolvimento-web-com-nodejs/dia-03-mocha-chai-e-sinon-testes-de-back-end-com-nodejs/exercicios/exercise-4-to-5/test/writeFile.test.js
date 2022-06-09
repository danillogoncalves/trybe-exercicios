const { expect } = require('chai');
const writeFile = require('../src/writeFile');
const fs = require('fs');
const sinon = require('sinon');

describe('Escreva no arquivo.', function() {
  describe('O que retorna', function() {
    afterEach(() => {
      fs.writeFileSync.restore();
    });
    it('Ao entrar com um número retorno um "string"', function() {
      sinon.stub(fs, 'writeFileSync');

      const CAMINHO_E_ARQUIVO = './arquivo.txt';
      const ALTERACAO_DO_ARQUIVO = 'Olá Tryber!';

      const result = writeFile(CAMINHO_E_ARQUIVO, ALTERACAO_DO_ARQUIVO);

      expect(result).to.be.a('string');
    });
  });
  describe('Manipulando a função.', function() {
    afterEach(() => {
      fs.writeFileSync.restore();
    });
    it('Retorna "ok" ao concluir o processo.', function() {
      sinon.stub(fs, 'writeFileSync');
      const CAMINHO_E_ARQUIVO = './arquivo.txt';
      const ALTERACAO_DO_ARQUIVO = 'Olá Tryber!';
      
      const result = writeFile(CAMINHO_E_ARQUIVO, ALTERACAO_DO_ARQUIVO);

      expect(result).to.be.equals('ok');
    });
  });
});