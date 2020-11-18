"use strict";
//aufgabe 1
// Divs
let div1 = document.createElement("DIV");
div1.appendChild(document.createTextNode("Das ist ein div1"));
document.body.appendChild(div1);
function changeText(_event) {
    div1.innerText = "Text geändert";
}
div1.addEventListener("click", changeText);
let div2 = document.createElement("DIV");
div2.appendChild(document.createTextNode("Das ist ein div2"));
document.body.appendChild(div2);
function changeColor(_event) {
    div2.innerText.style.color = "pink";
}
div2.addEventListener("click", changeColor);
//Buttons
let button1 = document.createElement("BUTTON");
button1.appendChild(document.createTextNode("Ich füge ein Quadrat hinzu"));
document.body.appendChild(button1);
let button2 = document.createElement("BUTTON");
button2.appendChild(document.createTextNode("Ich lösche Alles"));
document.body.appendChild(button2);
let canvas = document.getElementById("canvas-button");
let context = canvas.getContext("2d");
function addSquare(_event) {
    context.fillStyle = "black";
    context.fillRect(100, 100, 100, 100);
    console.log(canvas);
}
let button = (document.querySelector("button"));
button.addEventListener("click", addSquare);
//# sourceMappingURL=script.js.map