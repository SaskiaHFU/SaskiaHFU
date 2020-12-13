
//Register
let registerForm: HTMLFormElement = <HTMLFormElement>document.getElementById("register-form");

let registerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitButton");
registerButton.addEventListener("click", submitToServer);

// async function submit (_e: Event): Promise<void> {

//     let formData: FormData = new FormData(document.forms[0]);
//     formData.append("vorname", formData.get("vorname"));
//     formData.append("nachname", formData.get("nachname"));
//     formData.append("email", formData.get("email"));
//     formData.append("passwort", formData.get("passwort"));

//     registerForm.submit();
// }

let url: string = "http://localhost:8100/";

async function submitToServer(_event: Event): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    
    url = url + "?" + query.toString();
    console.log(url);

    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    console.log(response);

    await fetch(url + "?" + query.toString());
    alert("Response: " + responseText);

}

function processData (_event: Event): void { 

    
    console.log();
}

//Form clear

let resetButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

function reset(_e: Event): void {
    registerForm.reset();
}







