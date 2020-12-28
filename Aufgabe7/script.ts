
function bilder(_array: Bild[], _name: string): void {

    let grabElement: HTMLDivElement = <HTMLDivElement>document.getElementById("row");

    for (let i: number = 0; i < _array.length; i++) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        div.className = ("col-1");

        div.addEventListener("click", select);

        grabElement.appendChild(div);

        let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        img.src = _array[i].bild;

        div.dataset.index = _array[i].bild;
        div.dataset.typ = _name;

        div.appendChild(img);
    }
}

// //Auf unterschiedlichen Seiten Bilder laden

async function load(): Promise<void> {

    await laden();

    let zwischenString: string[] = window.location.pathname.split("/");

    switch (zwischenString[zwischenString.length - 1]) {
        case "seite_eins.html":
            bilder(obstsalat1.schale, "schale");
            break;

        case "seite_zwei.html":

            bilder(obstsalat1.fruechte, "fruechte");
            break;

        case "seite_drei.html":

            bilder(obstsalat1.toppings, "toppings");
            break;

        case "ergebnis.html":
            auslesen();
            send("https://gis-communication.herokuapp.com");
            break;
    }
}

window.addEventListener("load", load);

async function auslesen(): Promise<void> {
    let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementById("letzte-bilder");

    let properties: string[] = Object.getOwnPropertyNames(obstsalat1);

    for (let property  of properties ) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        div.className = ("col-1");
        selectElement.appendChild(div);
        
        let value: string = localStorage.getItem(property);

        let optionImage: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        optionImage.src = value;

        div.appendChild(optionImage);
    }
}
//Daten speichern

function select(_event: MouseEvent): void {
    let target: HTMLElement = <HTMLElement>_event.currentTarget;

    window.localStorage.setItem(target.dataset.typ, target.dataset.index);

    console.log(localStorage.getItem(target.dataset.typ));


}

//Daten löschen
let endeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ende");
// endeButton.addEventListener("click", loeschen);

function loeschen(_e: EventListener): void {

    window.localStorage.clear();
}

// Interfaces

interface Bild {
    groeße: string;
    bild: string;
    name: string;
}

interface Obstsalat {

    [name: string]: Bild[];

    schale: Bild[];
    fruechte: Bild[];
    toppings: Bild[];
}

async function send(_url: string): Promise<void> {

    let params: URLSearchParams = new URLSearchParams(localStorage);
    _url = _url + "?" + params.toString();

    let response: Response = await fetch(_url);

    let serverMessage: ServerMessage = await response.json();
    
    let serverResult: HTMLElement = document.getElementById("serverresult");

    let text: HTMLParagraphElement = document.createElement("p");

    //Catch
    if (serverMessage.message !== undefined) {  
       text.innerText = serverMessage.message;
    }

    if (serverMessage.error !== undefined) {
        text.setAttribute("style", "color:red");
        text.innerText = serverMessage.error;
     }

    serverResult.appendChild(text);
} 

interface ServerMessage {

    message: string;
    error: string;
}




