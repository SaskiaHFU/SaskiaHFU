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

let element1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("slot-1");
element1.addEventListener("click", select);
element1.dataset.index = "1";

let element2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("slot-2");
element2.addEventListener("click", select);
element2.dataset.index = "2";

let element3: HTMLButtonElement = <HTMLButtonElement>document.getElementById("slot-3");
element3.addEventListener("click", select);
element3.dataset.index = "3";

let element4: HTMLButtonElement = <HTMLButtonElement>document.getElementById("slot-4");
element4.addEventListener("click", select);
element4.dataset.index = "4";

function select (_event: MouseEvent): void {
  let target: HTMLElement = <HTMLElement>_event.target;
  console.log("Ausgewählt", target.dataset.index);
}

function speichern (): void {

    for (let i = 0; i < schale.length; i++) {


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





