function a1(): void {
    let x: string = "Alles";
    debugger;
    console.log(x);
    func1();
    console.log("Logo!");
    
}

a1();

function func1(): void {
    console.log("Klar?");
}

/* Aufgabe 2 */

function a1(): void {
    let x: string = "Alles";
    debugger;
    func2();
    
    func1();
    console.log(x);
    console.log("Logo!");
    
}

a1();

function func1(): void {
    console.log("Klar?");
}

function func2(): void {
    console.log("Alles Gute!");
}




