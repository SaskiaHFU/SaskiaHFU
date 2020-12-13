"use strict";
//Register
let registerForm = document.getElementById("register-form");
let registerButton = document.getElementById("submitButton");
registerButton.addEventListener("click", submitToServer);
// async function submit (_e: Event): Promise<void> {
//     let formData: FormData = new FormData(document.forms[0]);
//     formData.append("vorname", formData.get("vorname"));
//     formData.append("nachname", formData.get("nachname"));
//     formData.append("email", formData.get("email"));
//     formData.append("passwort", formData.get("passwort"));
//     registerForm.submit();
// }
let url = "http://localhost:8100/";
async function submitToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    let responseText = await response.text();
    console.log(response);
    await fetch(url + "?" + query.toString());
    alert("Response: " + responseText);
}
function processData(_event) {
    console.log();
}
//Form clear
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);
function reset(_e) {
    registerForm.reset();
}
//# sourceMappingURL=scriptClient.js.map