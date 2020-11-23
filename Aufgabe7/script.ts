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
        let optionImage: HTMLImageElement = <HTMLImageElement>document.createElement(i);
        selectElement.appendChild(optionImage);
        console.log(i);
    }
}
window.onload = load;
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





