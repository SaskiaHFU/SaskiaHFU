//Bilder anzeigen

function bilder(_info: Bild[], _name: string): void {

    let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementById("row");

    for (let i: number = 0; i < _info.length; i++) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");


        div.className = ("col-1");

        div.addEventListener("click", select);

        selectElement.appendChild(div);

        let optionImage: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        optionImage.src = _info[i].bild;

        div.dataset.index = i.toString();
        div.dataset.typ = _name;

        div.appendChild(optionImage);



    }
}

// //Auf unterschiedlichen Seiten Bilder laden

async function load(): Promise <void> {

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


//Daten speichern

function select(_event: MouseEvent): void {
    let target: HTMLElement = <HTMLElement>_event.currentTarget;

    window.localStorage.setItem(target.dataset.typ, target.dataset.index);

    console.log(localStorage.getItem(target.dataset.typ));

    document.getElementById("col-1").style.borderBottom = "thick solid red";
}

function auslesen(): void {
    let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementById("letzte-bilder");

    for (let i: number = 0; i < localStorage.length; i++) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");

        div.className = ("col-1");
        selectElement.appendChild(div);


        let schluessel: string = localStorage.key(i);
        let value: number = parseInt (localStorage.getItem(schluessel)); //nummer in string speichern
        let bild: Bild = (<Bild[]> obstsalat1[schluessel])[value];

        console.log(bild);

        let optionImage: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        optionImage.src = bild.bild;


        div.appendChild(optionImage);
    }
}

//Daten löschen
let endeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ende");
endeButton.addEventListener("click", loeschen);

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



//asynchron

async function send(_url: string): Promise<void> {



    let params: URLSearchParams = new URLSearchParams(localStorage);
    _url = _url + "?" + params.toString();


    let response: Response = await fetch(_url);
    console.log("Response", await response.json());

   

    // Platz generieren
    // let responseServer: HTMLDivElement = <HTMLDivElement>document.getElementById("antwort");
    // let messageText: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");



    //Catch
    if (messageText !== undefined) {
        console.log(messageText);
        messageText.innerText = message;
    }

    let error: string = datenJson["error"];

    if (error !== undefined) {
        messageText.setAttribute("style", "color:red");
        messageText.innerText = error;
    }

    // responseServer.appendChild(messageText);

    

}





