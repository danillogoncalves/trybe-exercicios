const buttonBGC = document.querySelector('#buttonBGC');
const buttonCT = document.querySelector('#buttonCT');
const buttonFS = document.querySelector('#buttonFS');
const buttonLH = document.querySelector('#buttonLH');
const buttonFF = document.querySelector('#buttonFF');

let userBGC = localStorage.getItem('BGC');
let userCT = localStorage.getItem('CT');
let userFS = localStorage.getItem('FS');
let userLH = localStorage.getItem('LH');
let userFF = localStorage.getItem('FF');

buttonBGC.addEventListener('click', saveUserBGC);
buttonCT.addEventListener('click', saveUserCT);
buttonFS.addEventListener('click', saveUserFS);
buttonLH.addEventListener('click', saveUserLH);
buttonFF.addEventListener('click', saveUserFF);


function saveUserBGC() {
    let inputTextBGC = document.querySelector('#inputBGC').value;
    document.body.style.backgroundColor = inputTextBGC;
    localStorage.setItem('BGC', inputTextBGC);
}

function saveUserCT() {
    let inputTextCT = document.querySelector('#inputCT').value;
    document.body.style.color = inputTextCT;
    localStorage.setItem('CT', inputTextCT);
}

function saveUserFS() {
    let inputNumberFS = document.querySelector('#inputFS').value;
    document.body.style.fontSize = (inputNumberFS + 'px');
    localStorage.setItem('FS', (inputNumberFS + 'px'));
}

function saveUserLH() {
    let inputNumberLH = document.querySelector('#inputLH').value;
    document.body.style.lineHeight = (inputNumberLH + 'px');
    localStorage.setItem('LH', (inputNumberLH + 'px'));
}
function saveUserFF() {
    let inputTextFF = document.querySelector('#inputFF').value;
    document.body.style.fontFamily = inputTextFF;
    localStorage.setItem('FF', inputTextFF);
}
window.onload = function () {
    document.body.style.backgroundColor = userBGC;
    document.body.style.color = userCT;
    document.body.style.fontSize = userFS;
    document.body.style.lineHeight = userLH;
    document.body.style.fontFamily = userFF;
}
