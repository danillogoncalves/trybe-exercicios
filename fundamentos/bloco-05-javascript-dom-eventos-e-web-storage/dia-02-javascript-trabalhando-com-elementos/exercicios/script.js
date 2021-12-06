let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

let sectCentet = document.createElement('section');
sectCentet.className = 'center-content'
document.querySelector('main').appendChild(sectCentet);

let p = document.createElement('p');
p.innerText = 'Algum texto';
document.querySelector('.center-content').appendChild(p);
