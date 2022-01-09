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
const dadosPessoasCurriculo = document.querySelector('#capturaDosDados');

const nomeMaxLength = nome.maxLength;
const emailMaxLength = email.maxLength;
const cpfMaxLength = cpf.maxLength;
const enderecoMaxLength = endereco.maxLength;
const cidadeMaxLength = cidade.maxLength;
const resumoCurriculoMaxLength = resumoCurriculo.maxLength;
const cargoMaxLength = cargo.maxLength;
const descricaoCargoMaxLength = descricaoCargo.maxLength;

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
    e.value = key;
    e.innerHTML = estados[key];
    menuEstados.appendChild(e);
  }
}

criaEstados();

function constroiData(event) {
  if (isNaN(event.key)) {
    event.preventDefault()
  }
  const tamanho = dataDeInicio.value.length;
  if (tamanho === 2 || tamanho === 5) {
    dataDeInicio.value = dataDeInicio.value + '/';
  }
}

function validaDia(array) {
  if(array[0] < 1 || array[0] >31) {
    return true;
  }
}
function validaMes(array) {
  if(array[1] < 1 || array[1] >12) {
    return true;
  }
}
function validaAno(array) {
  if (array[2] < 0) {
    return true;
  }
}
function validaData() {
  const valor = dataDeInicio.value.match(/\d+/g);
  if (!valor) {
    alert('Campo Data de Início está vázio!');
    dataDeInicio.value = '';
    return
  }
  if (validaDia(valor) || validaMes(valor) || validaAno(valor)) {
    alert('Essa data é invalida!');
    dataDeInicio.value = '';
  }

}

function validaDados(event) {
  event.preventDefault();
  dadosPessoasCurriculo.innerHTML = '';
  
  // Nome
  if (!nome.value || nome.value.length > nomeMaxLength) {
    return mensagemDeErro('nome', nome, nomeMaxLength);
  } else {
    mensagemRelatorio("Nome", nome);
  }
  
  // E-mail
  if (!email.value || email.value.length > emailMaxLength) {
    return mensagemDeErro('e-mail', email, emailMaxLength);
  } else {
    mensagemRelatorio("E-mail", email);
  }

  // CPF
  if (!cpf.value || cpf.value.length > cpfMaxLength) {
    return mensagemDeErro('CPF', cpf, cpfMaxLength);
  } else {
    mensagemRelatorio("CPF", cpf);
  }

  // Endereço
  if (!endereco.value || endereco.value.length > enderecoMaxLength) {
    return mensagemDeErro('endereço', endereco, enderecoMaxLength);
  } else {
    mensagemRelatorio("Endereço", endereco);
  }
 
  // Cidade
  if (!cidade.value || cidade.value.length > cidadeMaxLength) {
    return mensagemDeErro('cidade', cidade, cidadeMaxLength);
  } else {
    mensagemRelatorio("Cidade", cidade);
  }

  // Estados
  if (!estados[estado.value]) {
    criaEstados();
    const mesagem = document.createElement('p');
    mesagem.classList.add('erroFormulario');
    mesagem.innerHTML = 'O campo estado está incorreto!';
    mesagem.style.color = 'red';
    estado.focus();
    return dadosPessoasCurriculo.appendChild(mesagem);
  } else {
    const mesagem = document.createElement('p');
    mesagem.classList.add('formularioCerto');
    mesagem.innerHTML = `Estado: ${estados[estado.value]}`;
    dadosPessoasCurriculo.appendChild(mesagem);
  }

  // Tipo de residencia
  if (!residencia[0].checked && !residencia[1].checked) {
    residencia[0].checked = true;
    const mesagem = document.createElement('p');
    mesagem.classList.add('erroFormulario');
    mesagem.innerHTML = 'O campo tipo de residencia está incorreto!';
    mesagem.style.color = 'red';
    residencia[0].focus();
    return dadosPessoasCurriculo.appendChild(mesagem);
  } else {
    let estadoTrue = '';
    for (let i = 0; i < residencia.length; i += 1) {
      if (residencia[i].checked) {
        estadoTrue = residencia[i];
      }
    }
    const mesagem = document.createElement('p');
    mesagem.classList.add('formularioCerto');
    mesagem.innerHTML = `Tipo de residencia: ${estadoTrue.parentNode.innerText}`;
    dadosPessoasCurriculo.appendChild(mesagem);
  }

  // Resumo do currículo:
  if (!resumoCurriculo.value || resumoCurriculo.value.length > resumoCurriculoMaxLength) {
    return mensagemDeErro('resumo currículo', resumoCurriculo, resumoCurriculoMaxLength);
  } else {
    mensagemRelatorio("Resumo Currículo", resumoCurriculo);
  }

   // Cargo:
  if (!cargo.value || cargo.value.length > cargoMaxLength) {
    return mensagemDeErro('cargo', cargo, cargoMaxLength);
  } else {
    mensagemRelatorio("Cargo", cargo);
  }

  // Descricão Cargo:
  if (!descricaoCargo.value || descricaoCargo.value.length > descricaoCargoMaxLength) {
    return mensagemDeErro('descrição cargo', descricaoCargo, descricaoCargoMaxLength);
  } else {
    mensagemRelatorio("Descricão Cargo", descricaoCargo);
  }
  //Data de Início
  if (!dataDeInicio.value) {
    const mesagem = document.createElement('p');
    mesagem.classList.add('erroFormulario');
    mesagem.innerHTML = `O campo data de início está vázio!`;
    mesagem.style.color = 'red';
    dataDeInicio.focus();
    return dadosPessoasCurriculo.appendChild(mesagem)
  }
  const mesagem = document.createElement('p');
  mesagem.classList.add('formularioCerto');
  mesagem.innerHTML = `Data de Início: ${dataDeInicio.value}`;
  dadosPessoasCurriculo.appendChild(mesagem);

  window.location.href = '#capturaDosDados';
}
// Desenvolvido jundo como Roberval Filho na mentoria
function mensagemDeErro(nome, element, maxLength) {
  element.maxLength = maxLength;
  element.value = '';
  const mesagem = document.createElement('p');
  mesagem.classList.add('erroFormulario');
  mesagem.innerHTML = `O campo ${nome} está incorreto!`;
  mesagem.style.color = 'red';
  element.focus();
  return dadosPessoasCurriculo.appendChild(mesagem);
}

function mensagemRelatorio(nome, element) {
  const mesagem = document.createElement('p');
  mesagem.classList.add('formularioCerto');
  mesagem.innerHTML = `${nome}: ${element.value}`;
  dadosPessoasCurriculo.appendChild(mesagem);
}

dataDeInicio.addEventListener('keypress', constroiData);
dataDeInicio.addEventListener('change', validaData);
botaoEnviar.addEventListener('click', validaDados);