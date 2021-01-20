"use strict";
//User anzeigen
let dataButton = document.getElementById("dataButton");
dataButton.addEventListener("click", getUsers);
async function getUsers() {
    let response = await fetch(url + "user");
    let users = await response.json();
    let usersDiv = document.getElementById("users");
    let userCount = 0;
    for (let user of users) {
        let userDiv = document.createElement("div");
        // let attributes: Map <string, string> = new Map <string, string> ();
        // attributes.set("Vorname: ", user.vorname);
        // attributes.set("Nachname: ", user.nachname);
        // attributes.set("Email ", user.email);
        userDiv.innerText = `vorname: ${user.vorname} ${user.nachname} ${user.email}  `;
        console.log(user);
        usersDiv.appendChild(userDiv);
        userCount++;
    }
}
//# sourceMappingURL=user.js.map