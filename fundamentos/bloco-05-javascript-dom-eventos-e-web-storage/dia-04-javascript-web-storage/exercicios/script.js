const buttonBGC = document.querySelector('#buttonBGC');
const changeBGC = document.querySelector('#inputBGC');
let userBGC = localStorage.getItem('BGC');

buttonBGC.addEventListener('click', saveUserBGC);
//  changeBGC.addEventListener('change', saveUserBGC);

function saveUserBGC() {
    let inputTextBGC = document.querySelector('#inputBGC').value;
    document.body.style.backgroundColor = inputTextBGC;
    //userBGC = inputTextBGC;
    console.log(inputTextBGC);
    localStorage.setItem('BGC', inputTextBGC);
}

window.onload = function () {
    document.body.style.backgroundColor = userBGC;
}