"use strict";
function a1() {
    let x = "Alles";
    debugger;
    func22();
    console.log(x);
    func11();
    console.log(x);
    console.log("Logo!");
}
a1();
function func11() {
    console.log("Klar?");
}
function func22() {
    console.log("Alles Gute!");
}
/* Aufgabe 2 */
function a2() {
    let i = 9;
    debugger;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/* Aufgabe 3 */
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
/* Aufgabe 4 */
/*function multiply(_zahl1: number, _zahl2: number): number {

    let ergebnis: number = (_zahl1 * _zahl2);
    return ergebnis;
}

multiply();*/
/*function max (_zahl1: number, _zahl2: number): number {

    if (_zahl1 > _zahl2) {
        console.log(_zahl1);
        return _zahl1;
    } else {
        console.log(_zahl2);
        return _zahl2;
    }
    
}

max();*/
/*function count (): void {
    let i: number = 1;
    
    do {
        console.log(i);
        i = i + 1;
    } while ( i <= 100);

    console.log(i);
}

count();*/
/*function factorial (_n: number): number {

    for (let n: number = 0; n < 500; n++){
        if (n < 1){
            let x: number = 1;
            console.log(x);
        } else {
            console.log(n * n);
            return (n * n);
        }
    }
}

factorial();*/
function leapyears() {
    for (let i = 1900; i < 2020; i++) {
        let x = (i / 4);
        if (x == true && i / 100) {
            console.log(i);
        }
        else
            (i / 100 == true);
        {
        }
    }
}
//# sourceMappingURL=script.js.map