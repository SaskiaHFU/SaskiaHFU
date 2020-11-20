// Next Button

let buttonNext: HTMLButtonElement = <HTMLButtonElement> document.getElementById("next");
buttonNext.addEventListener("click", clear);
buttonNext.addEventListener("click", changeText);

function clear (_e: Event): void {
    let parent: HTMLDivElement = <HTMLDivElement> document.getElementById("pictures");
    parent.innerHTML = "";
        
}

function changeText (_e: Event): void {

    let element: HTMLDivElement = <HTMLDivElement> document.getElementById("change");
    element.textContent = "Text geändert";
}

// Canvas

let canvasSchaleEins: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas-schale-eins");
let context: CanvasRenderingContext2D = canvasSchaleEins.getContext("2d");

context.fillStyle = "black";
context.arc(75, 75, 35, 0, Math.PI, false); 

console.log(canvasSchaleEins);

// Interfaces

interface Bilder {
    groeße: string;
    bild: CanvasImageData;
    name: string;
}





