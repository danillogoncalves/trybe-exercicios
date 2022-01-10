const menuEstados = document.getElementById('select-estado');
const botaoEnviar = document.querySelector('#button-submit');
const formulario = document.querySelector('form');
const nome = document.querySelector('#input-nome');
const email = document.querySelector('#input-email');
const cpf = document.querySelector('#input-cpf');
const endereco = document.querySelector('#input-endereco');
const cidade = document.querySelector('#input-cidade');
const estado = document.querySelector('#select-estado');
const residencia = document.getElementsByName('residencia');
const resumoCurriculo = document.querySelector('#textarea-resumo-curriculo');
const cargo = document.querySelector('#input-cargo');
const descricaoCargo = document.querySelector('#input-descricao-cargo');
const dataDeInicio = document.querySelector('#input-data-inicio');
const relatorioDosDados = document.querySelector('#relatorio-dos-dados');

const estados = {
  ac: 'Acre',
  al:	'Alagoas',
  ap:	'Amapá',
  am:	'Amazonas',
  ba: 'Bahia',
  ce:	'Ceara',
  df: 'Distrito Federal',
  es:	'Espírito Santo',
  go:	'Goiás',
  ma:	'Maranhão',
  mt:	'Mato Grosso',
  ms:	'Mato Grosso do Sul',
  mg:	'Minas Gerais',
  pa:	'Pará',
  pb:	'Paraíba',
  pr:	'Paraná',
  pe:	'Pernambuco',
  pi:	'Piauí',
  rj:	'Rio de Janeiro',
  rn:	'Rio Grande do Norte',
  rs:	'Rio Grande do Sul',
  ro:	'Rondônia',
  rr:	'Roraima',
  sc:	'Santa Catarina',
  sp:	'São Paulo',
  se:	'Sergipe',
  to:	'Tocantins',
};
function criaEstados () {
  menuEstados.innerHTML = '';
  for (let key in estados) {
    const e = document.createElement('option');
    e.value = estados[key];
    e.innerHTML = estados[key];
    menuEstados.appendChild(e);
  }
}

const validate = new window.JustValidate('#form');

dataDeInicio.DatePickerX.init({
  format: 'dd/mm/yyyy',
});

criaEstados();

validate
  .addField('#input-nome', [
    {
      rule: 'required',
      errorMessage: 'Nome é obrigatório',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'O campo deve conter no mínimo 3 caracteres',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O campo deve conter no máximo 40 caracteres'
    }
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'E-mail é obrigatório',
    },
    {
      rule: 'email',
      errorMessage: 'E-mail inválido!',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O campo deve conter no máximo 50 caracteres'
    }
  ])
  .addField('#input-cpf', [
    {
      rule: 'required',
      errorMessage: 'CPF é obrigatório'
    },
    {
      rule: 'number',
      errorMessage: 'O valor deve ser um número',
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'O campo deve conter no máximo 11 caracteres'
    }
  ])
  .addField('#input-endereco', [
    {
      rule: 'required',
      errorMessage: 'Endereço é obrigatório'
    },
    {
      rule: 'maxLength',
      value: 200,
      errorMessage: 'O campo deve conter no máximo 200 caracteres'
    }
  ])
  .addField('#input-cidade', [
    {
      rule: 'required',
      errorMessage: 'Cidade é obrigatório'
    },
    {
      rule: 'maxLength',
      value: 28,
      errorMessage: 'O campo deve conter no máximo 28 caracteres'
    }
  ])
  .addField('#select-estado', [
    {
      rule: 'required',
      errorMessage: 'Estados é obrigatório'
    }
  ])
  .addRequiredGroup('#residencias',
    'Tipos de residência é obrigatório'
  )
  .addField('#textarea-resumo-curriculo', [
    {
      rule: 'required',
      errorMessage: 'Resumo do currículo é obrigatório'
    },
    {
      rule: 'maxLength',
      value: 1000,
      errorMessage: 'O campo deve conter no máximo 1000 caracteres'
    }
  ])
  .addField('#input-cargo', [
    {
      rule: 'required',
      errorMessage: 'Cargo é obrigatório'
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O campo deve conter no máximo 40 caracteres'
    }
  ])
  .addField('#input-descricao-cargo', [
    {
      rule: 'required',
      errorMessage: 'Descrição do cargo é obrigatório'
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O campo deve conter no máximo 500 caracteres'
    }
  ])
  .addField('#input-data-inicio', [
    {
      rule: 'required',
      errorMessage: 'Data de Início é obrigatório'
    }
  ])
  .onSuccess((event) => {
    geraRelatorio();
  });
;

function criaRelatorioDadosPessoais(item, valor) {
  const div = document.createElement('div');
  const span = document.createElement('span');
  span.innerHTML = `${item}: ${valor}`;
  div.appendChild(span);
  relatorioDosDados.appendChild(div);
}

function criaRelatorioDadosProfissionais(item, valor) {
  const div = document.createElement('div');
  const span = document.createElement('span');
  span.innerHTML = `${item}: ${valor}`;
  div.appendChild(span);
  relatorioDosDados.appendChild(div);
}

function geraRelatorio() {
  relatorioDosDados.innerHTML = '';
  relatorioDosDados.className = 'container flex-shrink-1 border m-1 pt-3';
  const listaDadosPessoais = document.querySelector('#dados-pessoais').children;
  const listaDadosProfissionais = document.querySelector('#dados-profissionais').children;
  for (let i = 0; i < (listaDadosPessoais.length - 1); i += 1) {
    const label = listaDadosPessoais[i].children[0].innerText;
    const input = listaDadosPessoais[i].children[1].value;
    criaRelatorioDadosPessoais(label, input);
  }
  const residencia = document.querySelector('#residencias').children;
  const divResidencia = document.createElement('div');
  const spanResidencia = document.createElement('span');
  const labelResidencia = document.querySelector('#residencias').previousElementSibling.innerText;
  let inputResidencia = '';
  for (let i = 0; i < residencia.length; i += 1) {
    if (residencia[i].children[1].checked) {
      inputResidencia = residencia[i].children[0].innerText;
      break;
    }
  }
  spanResidencia.innerHTML = `${labelResidencia}: ${inputResidencia}`;
  divResidencia.appendChild(spanResidencia);
  relatorioDosDados.appendChild(divResidencia);
  for (let i = 0; i < (listaDadosProfissionais.length); i += 1) {
    const label = listaDadosProfissionais[i].children[0].innerText;
    const input = listaDadosProfissionais[i].children[1].value;
    criaRelatorioDadosProfissionais(label, input);
  }
  window.location.href = '#relatorio-dos-dados';
}
