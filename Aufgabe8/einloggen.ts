//Einloggen

let loginForm: HTMLFormElement = <HTMLFormElement>document.getElementById("login-form");

let loginButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginButton");
loginButton.addEventListener("click", submitToServerLogin);

async function submitToServerLogin(): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    
    let queryUrl = url + "einloggen" + "?" + query.toString();
    console.log(queryUrl);

    let response: Response = await fetch(url);

    let responseField: HTMLParagraphElement = document.createElement("p");

    //Fehler auffangen
    if (response.status != 200) {
        responseField.innerText = "Fehler!";

    } 

    else {

        let responseText: string = await response.text();
        let statusCode: StatusCodes = Number.parseInt(responseText) as StatusCodes;
        
        if (statusCode == StatusCodes.BadWrongPassword) {
            responseField.innerText = "Passwort ist falsch!";
        }
        else if (statusCode == StatusCodes.Good) {
            responseField.innerText = "Passwort stimmt!";
        }
    }

    //Antwort anzeigen
   
    let serverResult: HTMLElement = document.getElementById("serverresult");
    if (oldLoginResultText != undefined) {
        serverResult.replaceChild(responseField, oldLoginResultText);
    }
    else {
        serverResult.appendChild(responseField);         
    }
    oldLoginResultText = responseField;

}