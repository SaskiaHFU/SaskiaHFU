
const enum StatusCodes {
    Good = 1,
    BadDatabaseProblem = 2,
    BadEmailExists = 3,
    BadWrongPassword = 4
}

let url: string = "http://localhost:8100/";

let oldLoginResultText: HTMLParagraphElement;

//Form clear

let resetButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

function reset(_e: Event): void {
    registerForm.reset();
}









