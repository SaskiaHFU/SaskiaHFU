"use strict";
//User anzeigen
let dataButton = document.getElementById("dataButton");
dataButton.addEventListener("click", getUsers);
async function getUsers() {
    let response = await fetch(url + "user");
    let users = await response.json();
    let userDiv = document.getElementById("users");
    let userCount = 0;
    for (let user of users) {
        let userDiv = document.createElement("div");
        let attributes = new Map();
        attributes.set("Vorname: ", user.Vorname);
        attributes.set("Nachname: ", user.Nachname);
        attributes.set("Email ", user.Email);
    }
    userDiv.appendChild(userDiv);
    userCount++;
}
//# sourceMappingURL=user.js.map