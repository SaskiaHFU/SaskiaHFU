"use strict";
//Bilder anzeigen
function bilder(_info) {
    let selectElement = document.getElementById("row");
    for (let i = 0; i < _info.length; i++) {
        let div = document.createElement("div");
        div.className = ("col-1");
        //
        div.classList.add("val" + 1);
        //
        div.addEventListener("click", select);
        selectElement.appendChild(div);
        let optionImage = document.createElement("img");
        optionImage.src = _info[i].bild;
        div.dataset.index = i.toString();
        div.appendChild(optionImage);
        console.log(_info[i].bild);
    }
}
// //Auf unterschiedlichen Seiten Bilder laden
function load() {
    let zwischenString = window.location.pathname.split("/");
    switch (zwischenString[zwischenString.length - 1]) {
        case "seite_eins.html":
            bilder(obstsalat1.schale);
            break;
        case "seite_zwei.html":
            bilder(obstsalat1.fruechte);
            break;
        case "seite_drei.html":
            bilder(obstsalat1.toppings);
            break;
        case "ergebnis.html":
            auslesen();
            break;
    }
}
window.addEventListener("load", load);
//Daten speichern
function select(_event) {
    let target = _event.currentTarget;
    //
    window.localStorage.setItem("Ausgewählt", document.getElementById("val").dataset.index);
    console.log(localStorage.getItem("Ausgewählt"));
    //
    console.log("Ausgewählt", target);
}
function auslesen() {
    let selectElement = document.getElementById("letzte-bilder");
    for (let i = 0; i < localStorage.length; i++) {
        let div = document.createElement("div");
        div.className = ("col-1");
        selectElement.appendChild(div);
        let optionImage = document.createElement("img");
        optionImage.src = localStorage.key(i);
        div.appendChild(optionImage);
    }
}
//Daten löschen
let endeButton = document.getElementById("ende");
endeButton.addEventListener("click", loeschen);
function loeschen(_e) {
    window.localStorage.clear();
}
//# sourceMappingURL=script.js.map