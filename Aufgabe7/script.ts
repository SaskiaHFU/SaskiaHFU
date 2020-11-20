// Next Button

let buttonNext: HTMLButtonElement = <HTMLButtonElement> document.getElementById("next");
buttonNext.addEventListener("click", clear);

function clear (_e: Event): void {
    let parent: HTMLDivElement = <HTMLDivElement> document.getElementById("pictures");
    parent.innerHTML = "";
        
}

// Canvas

let canvasSchaleEins: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas-schale-eins");
let context: CanvasRenderingContext2D = canvasSchaleEins.getContext("2d");

context.fillStyle = "black";
context.fillRect(50, 50, 50, 50);

console.log(canvasSchaleEins);



