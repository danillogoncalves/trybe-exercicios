document.querySelector('header').style.backgroundColor = "#2fc18c";
document.querySelector('.emergency-tasks').style.backgroundColor = "lightpink";
document.querySelector('.no-emergency-tasks').style.backgroundColor = "yellowgreen";
let emer = document.querySelectorAll(".emergency-tasks div h3");
for (let i = 0; i < emer.length; i += 1) {
    emer[i].style.backgroundColor = 'purple';
}

let noEmer = document.querySelectorAll(".no-emergency-tasks div h3");
for (let i = 0; i < noEmer.length; i += 1) {
    noEmer[i].style.backgroundColor = 'black';
}

document.querySelector('footer').style.backgroundColor = "navy";