//Register
let registerForm: HTMLFormElement = <HTMLFormElement>document.getElementById("register-form");

let registerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registerButton");
registerButton.addEventListener("click", submitToServerRegister);

async function submitToServerRegister(_event: Event): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);


    url = url + "?" + query.toString();
    console.log(url);

    let response: Response = await fetch(url);

    let responseField: HTMLParagraphElement = document.createElement("p");
    
    console.log(response);

    
    //alert("Response: " + responseText);

    //Fehler auffangen
    if (response.status != 200) {
        responseField.innerText = "Fehler!";

    } 
    else {

        let responseText: string = await response.text();
        let statusCode: StatusCodes = Number.parseInt(responseText) as StatusCodes;
        
        //Rückmeldung Submit

        if (statusCode == StatusCodes.BadEmailExists) {
            responseField.innerText = "E-Mail vorhanden";
        }

        else if (statusCode == StatusCodes.Good) {
            responseField.innerText = "Registiert";

        }

        else if (statusCode == StatusCodes.BadDatabaseProblem) {
            responseField.innerText = "Datenbank Problem";
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


 //Form clear

let resetButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

function reset(_e: Event): void {
    registerForm.reset();
}


