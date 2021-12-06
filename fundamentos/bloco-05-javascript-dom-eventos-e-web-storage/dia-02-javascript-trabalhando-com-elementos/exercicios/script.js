let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

let main = document.createElement('main');
document.body.appendChild(main);
main.className = 'main-content';

let sectCentet = document.createElement('section');
document.querySelector('main').appendChild(sectCentet);