//aufgabe 1
// Divs

let div1: HTMLDivElement = <HTMLDivElement> document.createElement("DIV");               
div1.appendChild(document.createTextNode("Das ist ein div1"));               
document.body.appendChild(div1);    

function changeText(_event: Event): void {

    div1.innerText = "Text geändert";
}

div1.addEventListener("click", changeText);

let div2: HTMLDivElement = <HTMLDivElement> document.createElement("DIV");               
div2.appendChild(document.createTextNode("Das ist ein div2"));                
document.body.appendChild(div2); 

function changeColor(_event: Event): void {

    div2.innerText.style.color = "pink";

}

div2.addEventListener("click", changeColor);

//Buttons

let button1: HTMLDivElement = <HTMLDivElement> document.createElement("BUTTON");               
button1.appendChild(document.createTextNode("Ich füge ein Quadrat hinzu"));             
document.body.appendChild(button1);  

let button2: HTMLDivElement = <HTMLDivElement> document.createElement("BUTTON");               
button2.appendChild(document.createTextNode("Ich lösche Alles"));             
document.body.appendChild(button2);  

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas-button");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

function addSquare(_event: Event): void {
    
    
    context.fillStyle = "black";
    context.fillRect(100, 100, 100, 100);
    
    console.log(canvas);
}

let button: HTMLButtonElement = <HTMLButtonElement> (document.querySelector("button"));
button.addEventListener("click", addSquare);


