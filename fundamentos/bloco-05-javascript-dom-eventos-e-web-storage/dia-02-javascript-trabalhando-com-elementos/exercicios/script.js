let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);
document.querySelector('h1').classList.add('title');

let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

let sectCenter = document.createElement('section');
sectCenter.className = 'center-content'
document.querySelector('main').appendChild(sectCenter);

let p = document.createElement('p');
p.innerText = 'Algum texto';
document.querySelector('.center-content').appendChild(p);

let sectLeft = document.createElement('section');
sectLeft.className = 'left-content'
document.querySelector('main').appendChild(sectLeft);

let sectRight = document.createElement('section');
sectRight.className = 'right-content'
document.querySelector('main').appendChild(sectRight);

let img = document.createElement('img');
img.setAttribute('src', 'https://picsum.photos/200');
img.className = 'small-image';
document.querySelector('.left-content').appendChild(img);

let list = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', "oito", 'nove', 'dez']
let ul = document.createElement('ul');
document.querySelector('.right-content').appendChild(ul);
for (let listItens of list) {
    let li = document.createElement('li')
    li.innerHTML = listItens;
    document.querySelector('.right-content').firstChild.appendChild(li);
}

let childrenMain = document.querySelector('main').children;
for (let index = 0 ; index < childrenMain.length; index += 1) {
    let h3 = document.createElement('h3');
    childrenMain[index].appendChild(h3);
    childrenMain[index].lastElementChild.classList.add('description');
}
const leftContent = document.querySelector('.left-content');
document.querySelector('main').removeChild(leftContent);

const rightContent = document.querySelector('.right-content');
rightContent.style.marginRight = 'auto';

document.querySelector('.center-content').parentElement.style.backgroundColor = 'green';

const ultimoDaLista = document.querySelector('.right-content').querySelector('ul').lastChild;
const penultimoDaLista = ultimoDaLista.previousSibling;
document.querySelector('.right-content').querySelector('ul').removeChild(ultimoDaLista);
document.querySelector('.right-content').querySelector('ul').removeChild(penultimoDaLista);