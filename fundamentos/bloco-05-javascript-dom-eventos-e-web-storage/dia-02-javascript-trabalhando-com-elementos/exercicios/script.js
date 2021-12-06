let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

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
