"use strict";
//Register
let registerForm = document.getElementById("register-form");
let registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", submitToServer);
let url = "http://localhost:8100/";
async function submitToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    let responseText = await response.text();
    console.log(response);
    alert("Response: " + responseText);
}
// Show Data
async function showData(_url) {
    let q = Url.parse(_request.url, true);
    for (let key in q.query) {
        _response.write(key + ":" + q.query[key] + "<br/>");
    }
}
//Form clear
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);
function reset(_e) {
    registerForm.reset();
}
//# sourceMappingURL=scriptClient.js.map