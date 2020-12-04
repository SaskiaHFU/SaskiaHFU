"use strict";
function bilder(_array, _name) {
    let grabElement = document.getElementById("row");
    for (let i = 0; i < _array.length; i++) {
        let div = document.createElement("div");
        div.className = ("col-1");
        div.addEventListener("click", select);
        grabElement.appendChild(div);
        let img = document.createElement("img");
        img.src = _array[i].bild;
        div.dataset.index = _array[i].bild;
        div.dataset.typ = _name;
        div.appendChild(img);
    }
}
// //Auf unterschiedlichen Seiten Bilder laden
async function load() {
    await laden();
    let zwischenString = window.location.pathname.split("/");
    switch (zwischenString[zwischenString.length - 1]) {
        case "seite_eins.html":
            bilder(obstsalat1.schale, "schale");
            break;
        case "seite_zwei.html":
            bilder(obstsalat1.fruechte, "fruechte");
            break;
        case "seite_drei.html":
            bilder(obstsalat1.toppings, "toppings");
            break;
        case "ergebnis.html":
            auslesen();
            send("https://gis-communication.herokuapp.com");
            break;
    }
}
window.addEventListener("load", load);
async function auslesen() {
    let selectElement = document.getElementById("letzte-bilder");
    let properties = Object.getOwnPropertyNames(obstsalat1);
    for (let property of properties) {
        let div = document.createElement("div");
        div.className = ("col-1");
        selectElement.appendChild(div);
        let value = localStorage.getItem(property);
        let optionImage = document.createElement("img");
        optionImage.src = value;
        div.appendChild(optionImage);
    }
}
//Daten speichern
function select(_event) {
    let target = _event.currentTarget;
    window.localStorage.setItem(target.dataset.typ, target.dataset.index);
    console.log(localStorage.getItem(target.dataset.typ));
}
//Daten löschen
let endeButton = document.getElementById("ende");
endeButton.addEventListener("click", loeschen);
function loeschen(_e) {
    window.localStorage.clear();
}
async function send(_url) {
    let params = new URLSearchParams(localStorage);
    _url = _url + "?" + params.toString();
    let response = await fetch(_url);
    let serverMessage = await response.json();
    let serverResult = document.getElementById("serverresult");
    let text = document.createElement("p");
    //Catch
    if (serverMessage.message !== undefined) {
        text.innerText = serverMessage.message;
    }
    if (serverMessage.error !== undefined) {
        text.setAttribute("style", "color:red");
        text.innerText = serverMessage.error;
    }
    serverResult.appendChild(text);
}
//# sourceMappingURL=script.js.map