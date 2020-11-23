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
        selectElement.appendChild(optionImage.src);
        console.log(schale[i]);
    }
}
window.addEventListener("load", load);
console.log(obst);
//# sourceMappingURL=script.js.map