//Bilder anzeigen

function bilder (_info: Bild[]): void {
    let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementById("row");

    for (let i: number = 0; i < _info.length; i++) {
        let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");


        div.className = ("col-1");
        div.addEventListener("click", select);

        selectElement.appendChild(div);

        let optionImage: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        optionImage.src = _info[i].bild;

        div.dataset.index = i.toString();

        div.appendChild(optionImage);
        console.log(_info[i].bild);
    }
} 

//Auf unterschiedlichen Seiten Bilder laden

function load(): void {

    switch (window.location.pathname) {
        case "seite_eins.html":
        bilder(schale);
        break;

        case "seite_zwei.html":
        bilder(fruechte);
        break;

        case "seite_drei.html":
        bilder(toppings);
        break;
        
    }
    
}

window.addEventListener("load", load);


//Daten speichern

function select(_event: MouseEvent): void {
    let target: HTMLElement = <HTMLElement>_event.target;
   
    console.log("Ausgewählt", target.dataset.index);
}


// Interfaces

interface Bild {
    groeße: string;
    bild: string;
    name: string;
}

interface Obstsalat {

    schale: Bild[];
    fruechte: Bild[];
    toppings: Bild[];
}






