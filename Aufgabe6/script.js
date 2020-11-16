"use strict";
//Aufgabe1
function min(_zahl1, _zahl2) {
    if (_zahl1 < _zahl2) {
        console.log(_zahl1);
        return _zahl1;
    }
    else {
        console.log(_zahl2);
        return _zahl2;
    }
}
console.log(min(9, 6));
let s1 = { name: "Mike", matrikelnummer: 265241, studiengang: "Online Medien" };
let s2 = { name: "Frieder", matrikelnummer: 265242, studiengang: "Online Medien" };
let s3 = { name: "Paul", matrikelnummer: 265243, studiengang: "Online Medien" };
//Array Typisierung
let s4 = null;
let studierende = [s1, s2, s3, s4];
console.log(studierende);
function showInfo(_student) {
    console.log(_student);
}
console.log(showInfo(s1));
console.log(showInfo(s2));
console.log(showInfo(s2));
//Aufgabe 2
//Aufgabe 3
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(50, 50, 50, 50);
console.log(canvas);
//# sourceMappingURL=script.js.map