"use strict";
//Bilder anzeigen
function bilder(_info, _name) {
    let selectElement = document.getElementById("row");
    for (let i = 0; i < _info.length; i++) {
        let div = document.createElement("div");
        div.className = ("col-1");
        div.addEventListener("click", select);
        selectElement.appendChild(div);
        let optionImage = document.createElement("img");
        optionImage.src = _info[i].bild;
        div.dataset.index = i.toString();
        div.dataset.typ = _name;
        div.appendChild(optionImage);
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
//Daten speichern
function select(_event) {
    let target = _event.currentTarget;
    window.localStorage.setItem(target.dataset.typ, target.dataset.index);
    console.log(localStorage.getItem(target.dataset.typ));
}
function auslesen() {
    let selectElement = document.getElementById("letzte-bilder");
    for (let i = 0; i < localStorage.length; i++) {
        let div = document.createElement("div");
        div.className = ("col-1");
        selectElement.appendChild(div);
        let schluessel = localStorage.key(i);
        let value = parseInt(localStorage.getItem(schluessel)); //nummer in string speichern
        let bild = obstsalat1[schluessel][value];
        console.log(bild);
        let optionImage = document.createElement("img");
        optionImage.src = bild.bild;
        div.appendChild(optionImage);
    }
}
//Daten löschen
let endeButton = document.getElementById("ende");
endeButton.addEventListener("click", loeschen);
function loeschen(_e) {
    window.localStorage.clear();
}
//asynchron
async function send(_url) {
    let params = new URLSearchParams(localStorage);
    _url = _url + "?" + params.toString();
    let response = await fetch(_url);
    console.log("Response", await response.json());
    // Platz generieren
    let responseServer = document.getElementById("antwort");
    let messageText = document.createElement("p");
    let message = response["message"];
    //Catch
    if (message !== undefined) {
        messageText.innerText = message;
    }
    let error = response["error"];
    if (error !== undefined) {
        messageText.setAttribute("style", "color:red");
        messageText.innerText = error;
    }
    responseServer.appendChild(messageText);
}
//# sourceMappingURL=script.js.map