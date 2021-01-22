//TS für alle unter TS

interface User {
    "vorname": string;
    "nachname": string;
    "email": string;
    [passwort: string]: string;
}


const enum StatusCodes {
    Good = 1,
    BadDatabaseProblem = 2,
    BadEmailExists = 3,
    BadWrongPassword = 4,
    BadNameExists
}

let url: string = "https://saskiagis2020.herokuapp.com/";

//"http://localhost:8100/"

let oldLoginResultText: HTMLParagraphElement;











