// function a1(): void {
//     let x: string = "Alles";
//     debugger;
//     func22();
//     console.log(x);
//     func11();
//     console.log(x);
//     console.log("Logo!");

// }

// a1();

// function func11(): void {
//     console.log("Klar?");
// }

// function func22(): void {
//     console.log("Alles Gute!");
// }

// /* Aufgabe 2 */

// function a2(): void {
//     let i: number = 9;
//     debugger;
//     do {
//         console.log(i)
//         i = i - 1;
//     } while (i > 0);
// }

// a2();

// /* Aufgabe 3 */

// let x: string = "Hallo";
// console.log(x);
// func1(x);
// console.log(x);
// func2();
// func3();
// console.log(x);

// function func1(y: string): void {
//     y = "Bla";
//     console.log(y);
// }

// function func2(): void {
//     let x: string = "Blubb";
//     console.log(x);
// }

// function func3(): void {
//     x = "Test";
// }

/* Aufgabe 5 */



// function multiply(_zahl1: number, _zahl2: number): number {

//     let ergebnis: number = (_zahl1 * _zahl2);
//     return ergebnis;

// }

// console.log(multiply(2, 4));


// function max (_zahl1: number, _zahl2: number): number {

//     if (_zahl1 > _zahl2) {
//         console.log(_zahl1);
//         return _zahl1;
//     } else {
//         console.log(_zahl2);
//         return _zahl2;
//     }

// }

// max(9, 6);

// function count (): void {
//     let i: number = 1;

//     do {
//         console.log(i);
//         i = i + 1;
//     } while ( i <= 100);

//     console.log(i);
// }

// console.log(count());

// let n: number = 4;

// function factorial(_n: number): number {

//     let factorial: number = 1;

//     if (_n < 1) {
//         return 1;
//     }
//     for (let n: number = 1; n <= _n; n++) {

//         factorial = n * factorial;

//     }
//     return factorial;
// }

// console.log(factorial(n));

function leapyears(): void {

    for (let i: number = 1900; i <= 2020; i++) {

        if (i % 4 == 0 && i % 100 == 0) {

            console.log(i);
            
        }
    }

}

console.log(leapyears());

// Aufgabe 6

// function rows(): void {
//     for (let i: number = 0; i < 7; i++) {
//         for (let k: number = 0; k < 7; k++) {
//             console.log("#");
//         }
//         console.log();
//     }
// }

// console.log(rows());

// function print(): void {


//     for (let i: number = 0; i <= 100; i++) {

//         if (i % 3 == 0) {
//             console.log("Fizz");

//         } else if (i % 5 == 0) {
//             console.log("Buzz");

//         } else {

//             console.log(i);
//         }
//     }
// }

// console.log(print());

function print2(): void {


    for (let i: number = 0; i <= 100; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");

        } else {

            console.log(i);
        }
    }

    console.log(print2());
}

// function chess(): string {

//     let map: string = "";
//     let char: string = " ";

//     for (let row: number = 0; row < 8; row++) {
//         for (let column: number = 0; column < 9; column++) {

//             if (char == "#") {

//                 map = map + " ";
//                 char = " ";
//             }
//             else {
//                 char = "#";
//             }
//         } 
//         map = map + "\n";

//         if (char == "#") {
//             char = " ";
//         }
//         else {
//             char = "#";
//         }
//     }

//     console.log(map);
//     return map;
//     }

// console.log(chess());

// function chess2(_length: number, _witdh: number): string {

//     let map: string = "";
//     let char: string = " ";

//     for (let row: number = 0; row < _length; row++) {
//         for (let column: number = 0; column <= _witdh ; column++) {

//             if (char == "#") {
//                 map = map + " ";
//                 char = " ";
//             }
//             else {
//                 map = map + "#";
//                 char = "#";
//             }
//         }
//         map = map + "\n";

//         if (char == "#") {
//             char = " ";
//         }
//         else {
//             char = "#";
//         }

//     }
//     console.log(map);
//     return map;

// }

// console.log(chess2(6, 10));




