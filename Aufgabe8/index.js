"use strict";
//Register
let registerForm = document.getElementById("register-form");
let registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", submitToServerRegister);
async function submitToServerRegister(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    let responseField = document.createElement("p");
    console.log(response);
    //alert("Response: " + responseText);
    //Fehler auffangen
    if (response.status != 200) {
        responseField.innerText = "Fehler!";
    }
    else {
        let responseText = await response.text();
        let statusCode = Number.parseInt(responseText);
        //Rückmeldung Submit
        if (statusCode == 3 /* BadEmailExists */) {
            responseField.innerText = "E-Mail vorhanden";
        }
        else if (statusCode == 1 /* Good */) {
            responseField.innerText = "Registiert";
        }
        else if (statusCode == 2 /* BadDatabaseProblem */) {
            responseField.innerText = "Datenbank Problem";
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
//Form clear
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);
function reset(_e) {
    registerForm.reset();
}
//# sourceMappingURL=index.js.map