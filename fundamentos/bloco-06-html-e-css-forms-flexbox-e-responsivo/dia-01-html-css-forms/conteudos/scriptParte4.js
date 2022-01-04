// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function previneComportamentoPadrao(event) {
  event.preventDefault();
}

function previneComportamentoPadraoInputText(event) {
  if (event.key !== 'a') {
    event.preventDefault();
  }
}

HREF_LINK.addEventListener('click', previneComportamentoPadrao);
INPUT_CHECKBOX.addEventListener('click', previneComportamentoPadrao);
INPUT_TEXT.addEventListener('keypress', previneComportamentoPadraoInputText);