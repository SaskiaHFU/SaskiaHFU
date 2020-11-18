//aufgabe 1
// Divs

let div1: HTMLDivElement = <HTMLDivElement>document.createElement("DIV");
div1.appendChild(document.createTextNode("Das ist ein div1"));
document.body.appendChild(div1);

function changeText(_event: Event): void {

    div1.innerText = "Text geändert";
    div1.style.color = "pink";
    div1.style.height = "150px";

}

div1.addEventListener("click", changeText);

let div2: HTMLDivElement = <HTMLDivElement>document.createElement("DIV");
div2.appendChild(document.createTextNode("Das ist ein div2"));
document.body.appendChild(div2);

function changeColor(_event: Event): void {

    div2.style.color = "blue";
    div2.style.width = "100px";
    div2.style.height = "100px";
    div2.style.border = "2px";
    div2.style.borderColor = "blue";

}

div2.addEventListener("click", changeColor);

//Buttons

let button1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button1");
let button2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");


button1.addEventListener("click", addSquare);
button2.addEventListener("click", loeschen);

function addSquare(_event: Event): void {

    let div: HTMLDivElement = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.marginLeft = (Math.random() * 200).toString() + "px";
    document.getElementById("fuellen")?.appendChild(div);
}
function loeschen(_event: Event): void {

    let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("fuellen");
    parent.innerHTML = "";
}

//Aufgabe 2
class obstsalat {

    obstsorten: obst;
    toppings: toppings;

    constructor(_obstsorten: obst, _toppings: toppings) {
        this.obstsorten = _obstsorten;
        this.toppings = _toppings;
    }

}

interface obst {

    name: string;
    anzahl: number;
    preis: number;
}

interface toppings {

    saft: boolean;
    streusel: boolean;

}

interface groeße {

    groeße: number; // größe angeben um maximale anzahl festzulegen
}

//b)
interface ausgewaehlt {

    div2.addEventListener("click", auswaehlen);

function auswaehlen(_event: Event): void {

    //
}
}



