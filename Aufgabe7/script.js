"use strict";
// // Next Button
let buttonNext = document.getElementById("next");
// buttonNext.addEventListener("click", clear);
// buttonNext.addEventListener("click", changeText);
// function clear (_e: Event): void {
//     let parent: HTMLDivElement = <HTMLDivElement> document.getElementById("pictures");
//     parent.innerHTML = "";
// }
// function changeText1 (_e: Event): void {
//     let element: HTMLDivElement = <HTMLDivElement> document.getElementById("change");
//     element.textContent = "Text geändert";
// }
//Bilder anzeigen
function load(_e) {
    for (let i = 0; i < schale.length; i++) {
        let selectElement = document.getElementById("slot-1");
        let optionImage = document.createElement("div");
        optionImage.src = schale[i].bild;
        selectElement.appendChild(optionImage);
        console.log(schale[i]);
    }
}
window.addEventListener("load", load);
let element1 = document.getElementById("slot-1");
element1.addEventListener("click", select);
element1.dataset.index = "1";
let element2 = document.getElementById("slot-2");
element2.addEventListener("click", select);
element2.dataset.index = "2";
let element3 = document.getElementById("slot-3");
element3.addEventListener("click", select);
element3.dataset.index = "3";
let element4 = document.getElementById("slot-4");
element4.addEventListener("click", select);
element4.dataset.index = "4";
function select(_event) {
    let target = _event.target;
    console.log("Ausgewählt", target.dataset.index);
}
function speichern() {
    for (let i = 0; i < schale.length; i++) {
    }
}
console.log(obst);
//# sourceMappingURL=script.js.map