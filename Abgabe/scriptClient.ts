
//Register
let loginForm: HTMLFormElement = <HTMLFormElement>document.getElementById("login-form");

let loginButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginButton");
registerButton.addEventListener("click", submitToServer);

let loginURL: string = "http://localhost:8100/";

async function submitToServer(_event: Event): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);


    url = url + "?" + query.toString();
    console.log(url);

    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    console.log(response);

    alert("Response: " + responseText);

}

// Show Data

async function showData(_url: string): Promise<void> {
    let q: URL.UrlWithParsedQuery = Url.parse(_request.url, true);

    for (let key in q.query) {
        _response.write(key + ":" + q.query[key] + "<br/>");
    }
}




//Form clear

// let resetButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("resetButton");
// resetButton.addEventListener("click", reset);

// function reset(_e: Event): void {
//     registerForm.reset();
// }









