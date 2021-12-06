//  Pate I - Buscando elementos

document.querySelector('#elementoOndeVoceEsta').parentNode
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red';
document.querySelector('#primeiroFilhoDoFilho').innerHTML = "Primeiro Filho do Filho";
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').nextSibling;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling.nextElementSibling;
document.querySelector('#pai').children[2];

//  Parte II - Criando elementos

let pai = document.querySelector('#pai');
let novoIrmao = document.createElement('section');
pai.appendChild(novoIrmao);

let primeiroFDF = document.querySelector('#primeiroFilhoDoFilho');
let filhoDePFDF = document.createElement('section');
primeiroFDF.appendChild(filhoDePFDF);
filhoDePFDF.setAttribute('id', 'primeiroFilhoDoFilhoDoFilho');

document.querySelector('#primeiroFilhoDoFilhoDoFilho').parentNode.parentNode.nextElementSibling;