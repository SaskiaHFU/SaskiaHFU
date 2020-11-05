function a1(): void {
    let x: string = "Alles";
    debugger;
    func2();
    console.log(x);
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

/* Aufgabe 2 */

function a2(): void {
    let i: number = 9;
    debugger;
    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();




