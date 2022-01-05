const menuEstados = document.getElementById('select-estado');
const botaoEnviar = document.querySelector('#button-submit');
const formulario = document.querySelector('form');
const nome = document.querySelector('#input-nome');
const email = document.querySelector('#input-email');
const cpf = document.querySelector('#input-cpf');
const endereco = document.querySelector('#input-endereco');
const cidade = document.querySelector('#input-cidade');
const estado = document.querySelector('#select-estado');
const residencia = document.getElementsByName('resistecia');
const resumoCurriculo = document.querySelector('#textarea-resumo-curriculo');
const cargo = document.querySelector('#input-cargo');
const descricaoCargo = document.querySelector('#input-descricao-cargo');
const dataDeInicio = document.querySelector('#input-data-inicio');

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
for (let key in estados) {
  const e = document.createElement('option');
  e.value = key;
  e.innerHTML = estados[key];
  menuEstados.appendChild(e);
}

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
  if (validaDia(valor) || validaMes(valor) || validaAno(valor)) {
    alert('Essa data é invalida!');
    dataDeInicio.value = '';
  }
}

// function validaDados(event) {
//   event.preventDefault();
//   if (document.querySelector('#input-nome')) {

//   }
// }

dataDeInicio.addEventListener('keypress', constroiData);
dataDeInicio.addEventListener('change', validaData);
// botaoEnviar.addEventListener('click', validaDados);
