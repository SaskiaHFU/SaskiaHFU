//Aufgabe1

function min (_zahl1: number, _zahl2: number): number {

    if (_zahl1 < _zahl2) {
        console.log(_zahl1);
        return _zahl1;
    } else {
        console.log(_zahl2);
        return _zahl2;
    }

}

console.log(min(9, 6));

//Aufgabe3

interface Student {

    name: string;
    matrikelnummer: number;
    studiengang: string;

}

let s1: Student = {name: "Mike", matrikelnummer: 265241, studiengang: "Online Medien" };
let s2: Student = {name: "Frieder", matrikelnummer: 265242, studiengang: "Online Medien"};
let s3: Student = {name: "Paul", matrikelnummer: 265243, studiengang: "Online Medien"};

//Array Typisierung

let s4: Student = null;

let studierende: Student[] = [s1, s2, s3, s4];

console.log(studierende);

function showInfo (_student: Student): {

    console.log(_student);
    
}

console.log(showInfo(s1));
console.log(showInfo(s2));
console.log(showInfo(s2));


