document.querySelector('header').style.backgroundColor = "#2fc18c";
document.querySelector('.emergency-tasks').style.backgroundColor = "lightpink";
document.querySelector('.no-emergency-tasks').style.backgroundColor = "yellowgreen";
let emergency = document.querySelectorAll(".emergency-tasks div h3");
for (let i = 0; i < emergency.length; i += 1) {
    emergency[i].style.backgroundColor = "purple";
}
let noEmergency = document.querySelectorAll(".no-emergency-tasks div h3");
for (let i = 0; i < emergency.length; i += 1) {
    noEmergency[i].style.backgroundColor = "black";
}
document.querySelector('footer').style.backgroundColor = "navy";