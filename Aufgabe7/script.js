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
        div.dataset.index = _info[i].bild;
        div.dataset.typ = _info[i].name;
        div.appendChild(optionImage);
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
    window.localStorage.setItem(target.dataset.typ, target.dataset.index);
    console.log(localStorage.getItem(target.dataset.typ));
}
function auslesen() {
    let selectElement = document.getElementById("letzte-bilder");
    for (let i = 0; i < localStorage.length; i++) {
        let div = document.createElement("div");
        div.className = ("col-1");
        selectElement.appendChild(div);
        let optionImage = document.createElement("img");
        optionImage.src = localStorage.key(i) + ".JPG";
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
    let response = await fetch(_url);
    console.log("Response", response);
    let selectElement = document.getElementById("letzte-bilder");
    let params = new URLSearchParams();
    for (let i = 0; i < localStorage.length; i++) {
        let div = document.createElement("div");
        div.className = ("col-1");
        selectElement.appendChild(div);
        let optionImage = document.createElement("img");
        optionImage.src = localStorage.key(i) + ".JPG";
        params.append(i.toString(), optionImage.src);
        div.appendChild(optionImage);
    }
    //aus JSON laden
    let jsonResponse = await fetch("https://raw.githubusercontent.com/SaskiaHFU/SaskiaHFU/main/Aufgabe7/data.json");
    let datenJson = await jsonResponse.json();
    console.log(datenJson);
    // Platz generieren
    let responseServer = document.getElementById("antwort");
    let messageText = document.createElement("p");
    let message = await response.json();
    //Catch
    if (messageText !== undefined) {
        console.log(messageText);
        messageText.innerText = message;
    }
    let error = datenJson["error"];
    if (error !== undefined) {
        messageText.setAttribute("style", "color:red");
        messageText.innerText = error;
    }
    responseServer.appendChild(messageText);
}
send("https://gis-communication.herokuapp.com");
//# sourceMappingURL=script.js.map