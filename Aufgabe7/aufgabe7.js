"use strict";
//aufgabe 1
// Divs
let div1 = document.createElement("DIV");
div1.appendChild(document.createTextNode("Das ist ein div1"));
document.body.appendChild(div1);
function changeText(_event) {
    div1.innerText = "Text geändert";
    div1.style.color = "pink";
    div1.style.height = "150px";
}
div1.addEventListener("click", changeText);
let div2 = document.createElement("DIV");
div2.appendChild(document.createTextNode("Das ist ein div2"));
document.body.appendChild(div2);
function changeColor(_event) {
    div2.style.color = "blue";
    div2.style.width = "100px";
    div2.style.height = "100px";
    div2.style.border = "2px";
    div2.style.borderColor = "blue";
}
div2.addEventListener("click", changeColor);
//Buttons
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
button1.addEventListener("click", addSquare);
button2.addEventListener("click", loeschen);
function addSquare(_event) {
    let div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.marginLeft = (Math.random() * 200).toString() + "px";
    document.getElementById("fuellen")?.appendChild(div);
}
function loeschen(_event) {
    let parent = document.getElementById("fuellen");
    parent.innerHTML = "";
}
//Aufgabe 2
class obstsalat {
    constructor(_obstsorten, _toppings) {
        this.obstsorten = _obstsorten;
        this.toppings = _toppings;
    }
}
div2.addEventListener("click", auswaehlen);
function auswaehlen(_event) {
    //
}
//# sourceMappingURL=aufgabe7.js.map