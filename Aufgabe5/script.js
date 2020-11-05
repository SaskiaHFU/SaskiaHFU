"use strict";
function a1() {
    let x = "Alles";
    debugger;
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
function func2() {
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
//# sourceMappingURL=script.js.map