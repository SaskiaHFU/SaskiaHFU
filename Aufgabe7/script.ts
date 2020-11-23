// // Next Button

let buttonNext: HTMLButtonElement = <HTMLButtonElement>document.getElementById("next");
// buttonNext.addEventListener("click", clear);
// buttonNext.addEventListener("click", changeText);

// function clear (_e: Event): void {
//     let parent: HTMLDivElement = <HTMLDivElement> document.getElementById("pictures");
//     parent.innerHTML = "";

// }

// function changeText1 (_e: Event): void {

//     let element: HTMLDivElement = <HTMLDivElement> document.getElementById("change");
//     element.textContent = "Text geändert";
// }

//Bilder anzeigen

function load(_e: Event): void {

    for (let i = 0; i < schale.length; i++) {
        let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementById("slot-1");

        let optionImage: HTMLImageElement = <HTMLImageElement>document.createElement("div");
        optionImage.src = schale[i].bild;
        selectElement.appendChild(optionImage);
        console.log(schale[i]);
    }
}
window.addEventListener("load", load);
window.addEventListener("click", speichern);

//Daten speichern

function select(_event: MouseEvent): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    console.log("Ausgewählt", target.dataset.index);
}

function speichern(): void {

    for (let i = 0; i < schale.length; i++) {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("col-1");
        div.addEventListener("click", select);
        div.dataset.index = i;
        parent.appendChild(div); //oder .prepend() wenn Sie es an den Anfang wollen

    }

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


console.log(obst);





