"use strict";
function a1() {
    let x = "Alles";
    debugger;
    console.log(x);
    func1();
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
/* Aufgabe 2 */
function a1() {
    let x = "Alles";
    debugger;
    func2();
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
//# sourceMappingURL=script.js.map