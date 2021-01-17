"use strict";
//Einloggen
let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", submitToServerLogin);
async function submitToServerLogin() {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    let queryUrl = url + "einloggen" + "?" + query.toString();
    console.log(queryUrl);
    let response = await fetch(url);
    let responseField = document.createElement("p");
    //Fehler auffangen
    if (response.status != 200) {
        responseField.innerText = "Fehler!";
    }
    else {
        let responseText = await response.text();
        let statusCode = Number.parseInt(responseText);
        if (statusCode == 4 /* BadWrongPassword */) {
            responseField.innerText = "Passwort ist falsch!";
        }
        else if (statusCode == 1 /* Good */) {
            responseField.innerText = "Passwort stimmt!";
        }
    }
    //Antwort anzeigen
    let serverResult = document.getElementById("serverresult");
    if (oldLoginResultText != undefined) {
        serverResult.replaceChild(responseField, oldLoginResultText);
    }
    else {
        serverResult.appendChild(responseField);
    }
    oldLoginResultText = responseField;
}
//# sourceMappingURL=einloggen.js.map