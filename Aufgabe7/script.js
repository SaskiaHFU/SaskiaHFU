"use strict";
//Bilder anzeigen
function bilder(_info) {
    let selectElement = document.getElementById("row");
    for (let i = 0; i < _info.length; i++) {
        let div = document.createElement("div");
        div.className = ("col-1");
        div.addEventListener("click", select);
        selectElement.appendChild(div);
        let optionImage = document.createElement("img");
        optionImage.src = _info[i].bild;
        div.dataset.index = i.toString();
        div.appendChild(optionImage);
        console.log(_info[i].bild);
    }
}
//Auf unterschiedlichen Seiten Bilder laden
function load() {
    switch (window.location.pathname) {
        case "seite_eins.html":
            bilder(schale);
            break;
        case "seite_zwei.html":
            bilder(fruechte);
            break;
        case "seite_drei.html":
            bilder(toppings);
            break;
    }
}
window.addEventListener("load", load);
//Daten speichern
function select(_event) {
    let target = _event.target;
    console.log("Ausgewählt", target.dataset.index);
}
//# sourceMappingURL=script.js.map